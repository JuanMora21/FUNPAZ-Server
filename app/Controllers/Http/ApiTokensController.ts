import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ApiToken from 'App/Models/ApiToken';

export default class ApiTokensController {
  /**
   * Listar todos los tokens
   */
  public async index({ response }: HttpContextContract) {
    try {
      const tokens = await ApiToken.query().preload('usuario');
      response.status(200).json({
        message: 'Lista de tokens obtenida exitosamente.',
        data: tokens,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los tokens.',
        data: null,
      });
    }
  }

  /**
   * Obtener un token por su ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const token = await ApiToken.findOrFail(params.id);
      response.status(200).json({
        message: 'Token encontrado exitosamente.',
        data: token,
      });
    } catch (error) {
      response.status(404).json({ message: 'Token no encontrado' });
    }
  }

  /**
   * Crear un nuevo token
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'id_usuario',
        'name',
        'type',
        'token',
      ]);
  
      const token = await ApiToken.create(data);
      response.status(201).json({
        message: 'Token creado exitosamente.',
        data: token,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el token.',
        data: null,
      });
    }
  }

  /**
   * Actualizar un token existente
   */
  public async update({ request, params, response }: HttpContextContract) {
    try {
      const token = await ApiToken.findOrFail(params.id);
      const data = request.only([
        'id_usuario',
        'name',
        'type',
        'token',
      ]);
  
      token.merge(data);
      await token.save();
      response.status(200).json({
        message: 'Token actualizado exitosamente.',
        data: token,
      });
    } catch (error) {
      response.status(404).json({ message: 'Token no encontrado' });
    }
  }

  /**
   * Eliminar un token existente
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const token = await ApiToken.findOrFail(params.id);
      await token.delete();
      response.status(200).json({
        message: 'Token eliminado exitosamente.',
        data: token,
      });
    } catch (error) {
      response.status(404).json({ message: 'Token no encontrado' });
    }
  }
}
