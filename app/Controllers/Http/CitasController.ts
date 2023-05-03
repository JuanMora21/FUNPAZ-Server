import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Cita from 'App/Models/Cita';

export default class CitasController {
  public async index({ response }: HttpContextContract) {
    try {
      const citas = await Cita.all();
      response.status(200).json({
        message: 'Lista de citas obtenida exitosamente.',
        data: citas
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de citas.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const cita = await Cita.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de la cita obtenida exitosamente.',
        data: cita
      });
    } catch (error) {
      response.status(404).json({ message: 'Cita no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'fecha',
        'hora',
        'duracion',
        'motivo',
        'estado',
        'id_paciente',
        'id_profesional',
      ]);
      const cita = await Cita.create(data);
      response.status(201).json({
        message: 'Cita creada exitosamente.',
        data: cita
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear la cita.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const cita = await Cita.findOrFail(params.id);
      const data = request.only([
        'fecha',
        'hora',
        'duracion',
        'motivo',
        'estado',
        'id_paciente',
        'id_profesional',
      ]);
      cita.merge(data);
      await cita.save();
      response.status(200).json({
        message: 'Cita actualizada exitosamente.',
        data: cita
      });
    } catch (error) {
      response.status(404).json({ message: 'Cita no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const cita = await Cita.findOrFail(params.id);
      await cita.delete();
      response.status(200).json({
        message: 'Cita eliminada exitosamente.',
        data: cita
      });
    } catch (error) {
      response.status(404).json({ message: 'Cita no encontrada' });
    }
  }
}
