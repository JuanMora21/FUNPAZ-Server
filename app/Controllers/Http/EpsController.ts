import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Eps from 'App/Models/Eps';

export default class EpsController {
  public async index({ response }: HttpContextContract) {
    try {
      const eps = await Eps.all();
      response.status(200).json({
        message: 'Lista de EPS obtenida exitosamente.',
        data: eps
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de EPS.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const eps = await Eps.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de la EPS obtenida exitosamente.',
        data: eps
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
      ]);
      const eps = await Eps.create(data);
      response.status(201).json({
        message: 'EPS creada exitosamente.',
        data: eps
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear la EPS.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const eps = await Eps.findOrFail(params.id);
      const data = request.only([
        'nombre',
      ]);
      eps.merge(data);
      await eps.save();
      response.status(200).json({
        message: 'EPS actualizada exitosamente.',
        data: eps
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const eps = await Eps.findOrFail(params.id);
      await eps.delete();
      response.status(200).json({
        message: 'EPS eliminada exitosamente.',
        data: eps
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS no encontrada' });
    }
  }
}
