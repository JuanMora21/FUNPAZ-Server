
import Hash from '@ioc:Adonis/Core/Hash';
//import { Hash } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';

export default class UsuariosController {
  /**
   * Listar todos los usuarios
   */
  public async index({ response }: HttpContextContract) {
    try {
      const usuarios = await Usuario.all();
      response.status(200).json({
        message: 'Lista de usuarios obtenida exitosamente.',
        data: usuarios
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los usuarios.',
        data: null
      });
    }
  }

  /**
   * Obtener un usuario por su ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const usuario = await Usuario.findOrFail(params.id);
      response.status(200).json({
        message: 'Usuario encontrado exitosamente.',
        data: usuario
      });
    } catch (error) {
      response.status(404).json({ message: 'Usuario no encontrado' });
    }
  }

  /**
   * Crear un nuevo usuario
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'correo_electronico',
        'contrasena',
        'id_rol',
      ]);
  
      // Encriptar la contraseña
      data.contrasena = await Hash.make(data.contrasena);
  
      const usuario = await Usuario.create(data);
      response.status(201).json({
        message: 'Usuario creado exitosamente.',
        data: usuario,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el usuario.',
        data: null,
      });
    }
  }
  
  /**
   * Actualizar un usuario existente
   */
  public async update({ request, params, response }: HttpContextContract) {
    try {
      const usuario = await Usuario.findOrFail(params.id);
      const data = request.only([
        'correo_electronico',
        'contrasena',
        'id_rol',
      ]);
  
      // Encriptar la contraseña
      if (data.contrasena) {
        data.contrasena = await Hash.make(data.contrasena);
      }
  
      usuario.merge(data);
      await usuario.save();
      response.status(200).json({
        message: 'Usuario actualizado exitosamente.',
        data: usuario,
      });
    } catch (error) {
      response.status(404).json({ message: 'Usuario no encontrado' });
    }
  }
  
  /**
   * Eliminar un usuario existente
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const usuario = await Usuario.findOrFail(params.id);
      await usuario.delete();
      response.status(200).json({
        message: 'Usuario eliminado exitosamente.',
        data: usuario
      });
    } catch (error) {
      response.status(404).json({ message: 'Usuario no encontrado' });
    }
  }
}