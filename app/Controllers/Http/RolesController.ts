import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Rol from 'App/Models/Rol';

export default class RolesController {
  /**
   * Listar todos los roles
   */
  public async index({ response }: HttpContextContract) {
    try {
      const roles = await Rol.all();
      response.status(200).json({
        message: 'Lista de roles obtenida exitosamente.',
        data: roles
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los roles.',
        data: null
      });
    }
  }

  /**
   * Obtener un rol por su ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const rol = await Rol.findOrFail(params.id);
      response.status(200).json({
        message: 'Rol encontrado exitosamente.',
        data: rol
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol no encontrado' });
    }
  }

  /**
   * Crear un nuevo rol
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['nombre']);
      const rol = await Rol.create(data);
      response.status(201).json({
        message: 'Rol creado exitosamente.',
        data: rol
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el rol.',
        data: null
      });
    }
  }

  /**
   * Actualizar un rol existente
   */
  public async update({ request, params, response }: HttpContextContract) {
    try {
      const rol = await Rol.findOrFail(params.id);
      const data = request.only(['nombre']);
      rol.merge(data);
      await rol.save();
      response.status(200).json({
        message: 'Rol actualizado exitosamente.',
        data: rol
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol no encontrado' });
    }
  }

  /**
   * Eliminar un rol existente
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const rol = await Rol.findOrFail(params.id);
      await rol.delete();
      response.status(200).json({
        message: 'Rol eliminado exitosamente.',
        data: rol
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol no encontrado' });
    }
  }
}
