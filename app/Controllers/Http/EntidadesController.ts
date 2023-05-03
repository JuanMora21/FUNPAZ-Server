import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Entidad from 'App/Models/Entidad';

export default class EntidadesController {
  public async index({ response }: HttpContextContract) {
    try {
      const entidades = await Entidad.all();
      response.status(200).json({
        message: 'Lista de entidades obtenida exitosamente.',
        data: entidades
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de entidades.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const entidad = await Entidad.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de la entidad obtenida exitosamente.',
        data: entidad
      });
    } catch (error) {
      response.status(404).json({ message: 'Entidad no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'tipo',
      ]);
      const entidad = await Entidad.create(data);
      response.status(201).json({
        message: 'Entidad creada exitosamente.',
        data: entidad
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear la entidad.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const entidad = await Entidad.findOrFail(params.id);
      const data = request.only([
        'tipo',
      ]);
      entidad.merge(data);
      await entidad.save();
      response.status(200).json({
        message: 'Entidad actualizada exitosamente.',
        data: entidad
      });
    } catch (error) {
      response.status(404).json({ message: 'Entidad no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const entidad = await Entidad.findOrFail(params.id);
      await entidad.delete();
      response.status(200).json({
        message: 'Entidad eliminada exitosamente.',
        data: entidad
      });
    } catch (error) {
      response.status(404).json({ message: 'Entidad no encontrada' });
    }
  }
}
