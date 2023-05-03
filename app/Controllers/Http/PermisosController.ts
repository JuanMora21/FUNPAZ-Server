import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Permiso from 'App/Models/Permiso';

export default class PermisosController {
  public async index({ response }: HttpContextContract) {
    try {
      const permisos = await Permiso.all();
      response.status(200).json({
        message: 'Lista de permisos obtenida exitosamente.',
        data: permisos
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener la lista de permisos.',
        data: null
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const permiso = await Permiso.findOrFail(params.id);
      response.status(200).json({
        message: 'Permiso encontrado exitosamente.',
        data: permiso
      });
    } catch (error) {
      response.status(404).json({ message: 'Permiso no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'url',
        'metodo',
      ]);
      const permiso = await Permiso.create(data);
      response.status(201).json({
        message: 'Permiso creado exitosamente.',
        data: permiso
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el permiso.',
        data: null
      });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const permiso = await Permiso.findOrFail(params.id);
      const data = request.only([
        'url',
        'metodo',
      ]);
      permiso.merge(data);
      await permiso.save();
      response.status(200).json({
        message: 'Permiso actualizado exitosamente.',
        data: permiso
      });
    } catch (error) {
      response.status(404).json({ message: 'Permiso no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const permiso = await Permiso.findOrFail(params.id);
      await permiso.delete();
      response.status(200).json({
        message: 'Permiso eliminado exitosamente.',
        data: permiso
      });
    } catch (error) {
      response.status(404).json({ message: 'Permiso no encontrado' });
    }
  }
}
