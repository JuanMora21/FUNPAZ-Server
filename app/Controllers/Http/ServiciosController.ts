import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Servicio from 'App/Models/Servicio';

export default class ServiciosController {
  public async index({ response }: HttpContextContract) {
    const servicios = await Servicio.all();
    response.status(200).json(servicios);
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const servicio = await Servicio.findOrFail(params.id);
      response.status(200).json(servicio);
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'nombre',
      'especialidad',
      'descripcion',
      'duracion',
      'tarifa_particular',
    ]);
    const servicio = await Servicio.create(data);
    response.status(201).json(servicio);
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const servicio = await Servicio.findOrFail(params.id);
      const data = request.only([
        'nombre',
        'especialidad',
        'descripcion',
        'duracion',
        'tarifa_particular',
      ]);
      servicio.merge(data);
      await servicio.save();
      response.status(200).json(servicio);
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const servicio = await Servicio.findOrFail(params.id);
      await servicio.delete();
      response.status(200).json({ message: 'Servicio eliminado' });
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }
}
