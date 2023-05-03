import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Comentario from 'App/Models/Comentario';

export default class ComentariosController {
  public async index({ response }: HttpContextContract) {
    try {
      const comentarios = await Comentario.all();
      response.status(200).json({
        message: 'Lista de comentarios obtenida exitosamente.',
        data: comentarios
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de comentarios.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const comentario = await Comentario.findOrFail(params.id);
      response.status(200).json({
        message: 'Información del comentario obtenida exitosamente.',
        data: comentario
      });
    } catch (error) {
      response.status(404).json({ message: 'Comentario no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'id_paciente',
        'autor',
        'fecha_publicacion',
        'contenido',
        'id_publicacion',
      ]);
      const comentario = await Comentario.create(data);
      response.status(201).json({
        message: 'Comentario creado exitosamente.',
        data: comentario
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear el comentario.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const comentario = await Comentario.findOrFail(params.id);
      const data = request.only([
        'id_paciente',
        'autor',
        'fecha_publicacion',
        'contenido',
        'id_publicacion',
      ]);
      comentario.merge(data);
      await comentario.save();
      response.status(200).json({
        message: 'Comentario actualizado exitosamente.',
        data: comentario
      });
    } catch (error) {
      response.status(404).json({ message: 'Comentario no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const comentario = await Comentario.findOrFail(params.id);
      await comentario.delete();
      response.status(200).json({
        message: 'Comentario eliminado exitosamente.',
        data: comentario
      });
    } catch (error) {
      response.status(404).json({ message: 'Comentario no encontrado' });
    }
  }
}
