import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Multimedia from 'App/Models/Multimedia';

export default class MultimediasController {
  public async index({ response }: HttpContextContract) {
    try {
      const multimedias = await Multimedia.all();
      response.status(200).json({
        message: 'Lista de Multimedias obtenida exitosamente.',
        data: multimedias
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de Multimedias.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const multimedia = await Multimedia.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de Multimedia obtenida exitosamente.',
        data: multimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'Multimedia no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'tipo',
        'formato',
        'url',
        'descripcion',
      ]);
      const multimedia = await Multimedia.create(data);
      response.status(201).json({
        message: 'Multimedia creada exitosamente.',
        data: multimedia
      });
    } catch (error) {
      response.status(400).json({ message: 'Error al crear Multimedia.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const multimedia = await Multimedia.findOrFail(params.id);
      const data = request.only([
        'nombre',
        'tipo',
        'formato',
        'url',
        'descripcion',
      ]);
      multimedia.merge(data);
      await multimedia.save();
      response.status(200).json({
        message: 'Multimedia actualizada exitosamente.',
        data: multimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'Multimedia no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const multimedia = await Multimedia.findOrFail(params.id);
      await multimedia.delete();
      response.status(200).json({
        message: 'Multimedia eliminada exitosamente.',
        data: multimedia
      });
    } catch (error) {
      response.status(404).json({ message: 'Multimedia no encontrada' });
    }
  }
}
