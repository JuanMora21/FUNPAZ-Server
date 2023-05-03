import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Servicio from 'App/Models/Servicio';

export default class ServiciosController {
  public async index({ response }: HttpContextContract) {
    try {
      const servicios = await Servicio.all();
      response.status(200).json({
        message: 'Lista de servicios obtenida exitosamente.',
        data: servicios
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los servicios.',
        data: null
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const servicio = await Servicio.findOrFail(params.id);
      response.status(200).json({
        message: 'Servicio encontrado exitosamente.',
        data: servicio
      });
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'especialidad',
        'descripcion',
        'duracion',
        'tarifa_particular',
        'id_entidad',
      ]);
      const servicio = await Servicio.create(data);
      response.status(201).json({
        message: 'Servicio creado exitosamente.',
        data: servicio
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el servicio.',
        data: null
      });
    }
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
        'id_entidad',
      ]);
      servicio.merge(data);
      await servicio.save();
      response.status(200).json({
        message: 'Servicio actualizado exitosamente.',
        data: servicio
      });
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const servicio = await Servicio.findOrFail(params.id);
      await servicio.delete();
      response.status(200).json({
        message: 'Servicio eliminado exitosamente.',
        data: servicio
      });
    } catch (error) {
      response.status(404).json({ message: 'Servicio no encontrado' });
    }
  }
}