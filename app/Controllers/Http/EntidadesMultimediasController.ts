import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EntidadMultimedia from 'App/Models/EntidadMultimedia';

export default class EntidadesMultimediasController {
  public async index({ response }: HttpContextContract) {
    try {
      const entidadesMultimedias = await EntidadMultimedia.all();
      response.status(200).json({
        message: 'Lista de entidades multimedia obtenida exitosamente.',
        data: entidadesMultimedias
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de entidades multimedia.'});
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const entidadMultimedia = await EntidadMultimedia.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de la entidad multimedia obtenida exitosamente.',
        data: entidadMultimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['id_entidad', 'id_multimedia']);
      const entidadMultimedia = await EntidadMultimedia.create(data);
      response.status(201).json({
        message: 'Entidad multimedia creada exitosamente.',
        data: entidadMultimedia
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear la entidad multimedia.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const entidadMultimedia = await EntidadMultimedia.findOrFail(params.id);
      const data = request.only(['id_entidad', 'id_multimedia']);
      entidadMultimedia.merge(data);
      await entidadMultimedia.save();
      response.status(200).json({
        message: 'Entidad multimedia actualizada exitosamente.',
        data: entidadMultimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const entidadMultimedia = await EntidadMultimedia.findOrFail(params.id);
      await entidadMultimedia.delete();
      response.status(200).json({
        message: 'Entidad multimedia eliminada exitosamente.',
        data: entidadMultimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
    }
  }
}
