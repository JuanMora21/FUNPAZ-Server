import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Publicacion from 'App/Models/Publicacion';

export default class PublicacionesController {
  public async index({ response }: HttpContextContract) {
    try {
      const publicaciones = await Publicacion.all();
      response.status(200).json({
        message: 'Lista de publicaciones obtenida exitosamente.',
        data: publicaciones
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener la lista de publicaciones.',
        data: null
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const publicacion = await Publicacion.findOrFail(params.id);
      response.status(200).json({
        message: 'Publicación encontrada exitosamente.',
        data: publicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'Publicación no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'titulo',
        'autor',
        'fecha_publicacion',
        'categoria',
        'contenido',
        'etiquetas',
        'id_entidad',
      ]);
      const publicacion = await Publicacion.create(data);
      response.status(201).json({
        message: 'Publicación creada exitosamente.',
        data: publicacion
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear la publicación.',
        data: null
      });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const publicacion = await Publicacion.findOrFail(params.id);
      const data = request.only([
        'titulo',
        'autor',
        'fecha_publicacion',
        'categoria',
        'contenido',
        'etiquetas',
        'id_entidad',
      ]);
      publicacion.merge(data);
      await publicacion.save();
      response.status(200).json({
        message: 'Publicación actualizada exitosamente.',
        data: publicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'Publicación no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const publicacion = await Publicacion.findOrFail(params.id);
      await publicacion.delete();
      response.status(200).json({
        message: 'Publicación eliminada exitosamente.',
        data: publicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'Publicación no encontrada' });
    }
  }
}