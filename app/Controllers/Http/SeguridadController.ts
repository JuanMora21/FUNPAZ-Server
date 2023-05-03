import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';
import EmailService from 'App/Services/EmailService';
import PlantillaSeguridad from 'App/Services/EmailsTemplates/PlantillaSeguridad';

export default class SeguridadController {
  public async login({ auth, request, response }: HttpContextContract) {
    const correo_electronico = request.input('correo_electronico');
    const contrasena = request.input('contrasena');

   try {
      const el_usuario = await Usuario.query().where('correo_electronico', correo_electronico).first();
      //console.log(el_usuario)
      if (el_usuario !== null) {
        if (await Hash.verify(el_usuario.contrasena, contrasena)) {
          const token = await auth.use('api').generate(el_usuario, {
            expiresIn: '60 mins',
          });
  
          let plantilla_correo_electronico: PlantillaSeguridad = new PlantillaSeguridad();
          let html = plantilla_correo_electronico.newLogin();
          let el_servicio_correo_electronico: EmailService = new EmailService();
          el_servicio_correo_electronico.sendEmail(correo_electronico, 'Nuevo Inicio de Sesión', html);
  
          await el_usuario.load('rol');
          el_usuario.contrasena = '';
  
          response.status(200).json({
            message: 'Inicio de sesión exitoso.',
            token: token,
            usuario: el_usuario,
          });
        } else {
          response.status(401).json({ message: 'Credenciales inválidas' });
        }
      } else {
        response.status(404).json({ message: 'Usuario no encontrado', el_usuario });
      }
    } catch (error) {
      response.status(404).json({ message: 'Usuario no encontrado', error });
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke();
    return {
      revoked: true,
    };
  }

  public async forgotPassword({ auth, request, response }: HttpContextContract) {
    const correo_electronico = request.input('correo_electronico');

    try {
      const el_usuario = await Usuario.query().where('correo_electronico', correo_electronico).first();
      if (el_usuario !== null) {
        const token = await auth.use('api').generate(el_usuario, {
          expiresIn: '60 mins',
        });
  
        let plantilla_correo_electronico: PlantillaSeguridad = new PlantillaSeguridad();
        let html = plantilla_correo_electronico.forgotPassword(token.token);
        let el_servicio_correo_electronico: EmailService = new EmailService();
        el_servicio_correo_electronico.sendEmail(correo_electronico, 'Solicitud restablecimiento de contraseña', html);
  
        response.status(200).json({
          status: 'success',
          message: 'Revisar el correo electrónico',
        });
      } else {
        response.status(404).json({ message: 'Usuario no encontrado', el_usuario });
      }
    } catch (error) {
      response.status(404).json({ message: 'Usuario no encontrado' });
    }
  }

  public async resetPassword({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate();
      auth.use('api').isAuthenticated;
      const el_usuario = await Usuario.findBy('correo_electronico', auth.user!.correo_electronico);

      if (!el_usuario) {
        response.status(404).json({ message: 'Usuario no encontrado' });
      } else {
        el_usuario.contrasena = request.input('contrasena');
        await el_usuario.save();
        await auth.use('api').revoke();

        response.status(200).json({
          status: 'success',
          message: 'La contraseña se ha restaurado correctamente',
        });
      }
    } catch (error) {
      response.status(401).json({
        status: 'error',
        message: 'Token corrupto',
      });
    }
  }
}
