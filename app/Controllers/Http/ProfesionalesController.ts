import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Profesional from 'App/Models/Profesional';

export default class ProfesionalesController {
  public async index({ response }: HttpContextContract) {
    try {
      const profesionales = await Profesional.all();
      response.status(200).json({
        message: 'Lista de profesionales obtenida exitosamente.',
        data: profesionales
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener la lista de profesionales.',
        data: null
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const profesional = await Profesional.findOrFail(params.id);
      response.status(200).json({
        message: 'Profesional encontrado exitosamente.',
        data: profesional
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'especialidad',
        'horario',
        'telefono',
        'id_usuario',
        'id_entidad',
      ]);
      const profesional = await Profesional.create(data);
      response.status(201).json({
        message: 'Profesional creado exitosamente.',
        data: profesional
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el profesional.',
        data: null
      });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const profesional = await Profesional.findOrFail(params.id);
      const data = request.only([
        'nombre',
        'especialidad',
        'horario',
        'telefono',
        'id_usuario',
        'id_entidad',
      ]);
      profesional.merge(data);
      await profesional.save();
      response.status(200).json({
        message: 'Profesional actualizado exitosamente.',
        data: profesional
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const profesional = await Profesional.findOrFail(params.id);
      await profesional.delete();
      response.status(200).json({
        message: 'Profesional eliminado exitosamente.',
        data: profesional
      });
    } catch (error) {
      response.status(404).json({ message: 'Profesional no encontrado' });
    }
  }
}
