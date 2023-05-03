import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ProfesionalServicio from 'App/Models/ProfesionalServicio';

export default class ProfesionalesServiciosController {
  public async index({ response }: HttpContextContract) {
    try {
      const profesionalesServicios = await ProfesionalServicio.all();
      response.status(200).json({
        message: 'Lista de profesionales y servicios obtenida exitosamente.',
        data: profesionalesServicios,
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener los profesionales y servicios.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const profesionalServicio = await ProfesionalServicio.findOrFail(
        params.id_profesional,
        params.id_servicio
      );
      response.status(200).json({
        message: 'Profesional y servicio encontrado exitosamente.',
        data: profesionalServicio,
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['id_profesional', 'id_servicio']);
      const profesionalServicio = await ProfesionalServicio.create(data);
      response.status(201).json({
        message: 'Profesional y servicio creado exitosamente.',
        data: profesionalServicio,
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear el profesional y servicio.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const profesionalServicio = await ProfesionalServicio.findOrFail(
        params.id_profesional,
        params.id_servicio
      );
      const data = request.only(['id_profesional', 'id_servicio']);
      profesionalServicio.merge(data);
      await profesionalServicio.save();
      response.status(200).json({
        message: 'Profesional y servicio actualizado exitosamente.',
        data: profesionalServicio,
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const profesionalServicio = await ProfesionalServicio.findOrFail(
        params.id_profesional,
        params.id_servicio
      );
      await profesionalServicio.delete();
      response.status(200).json({
        message: 'Profesional y servicio eliminados exitosamente.',
        data: profesionalServicio,
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
    }
  }
}