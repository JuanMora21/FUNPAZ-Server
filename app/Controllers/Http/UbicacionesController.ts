import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Ubicacion from 'App/Models/Ubicacion';

export default class UbicacionesController {
  /**
   * Listar todas las ubicaciones
   */
  public async index({ response }: HttpContextContract) {
    try {
      const ubicaciones = await Ubicacion.all();
      response.status(200).json({
        message: 'Lista de ubicaciones obtenida exitosamente.',
        data: ubicaciones,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener las ubicaciones.',
        data: null,
      });
    }
  }

  /**
   * Obtener una ubicación por su ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const ubicacion = await Ubicacion.findOrFail(params.id);
      response.status(200).json({
        message: 'Ubicación encontrada exitosamente.',
        data: ubicacion,
      });
    } catch (error) {
      response.status(404).json({ message: 'Ubicación no encontrada' });
    }
  }

  /**
   * Crear una nueva ubicación
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'latitud',
        'longitud',
        'nombre',
        'id_entidad',
      ]);
      const ubicacion = await Ubicacion.create(data);
      response.status(201).json({
        message: 'Ubicación creada exitosamente.',
        data: ubicacion,
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear la ubicación.',
        data: null,
      });
    }
  }

  /**
   * Actualizar una ubicación existente
   */
  public async update({ request, params, response }: HttpContextContract) {
    try {
      const ubicacion = await Ubicacion.findOrFail(params.id);
      const data = request.only([
        'latitud',
        'longitud',
        'nombre',
        'id_entidad',
      ]);
      ubicacion.merge(data);
      await ubicacion.save();
      response.status(200).json({
        message: 'Ubicación actualizada exitosamente.',
        data: ubicacion,
      });
    } catch (error) {
      response.status(404).json({ message: 'Ubicación no encontrada' });
    }
  }

  /**
   * Eliminar una ubicación existente
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const ubicacion = await Ubicacion.findOrFail(params.id);
      await ubicacion.delete();
      response.status(200).json({
        message: 'Ubicación eliminada exitosamente.',
        data: ubicacion,
      });
    } catch (error) {
      response.status(404).json({ message: 'Ubicación no encontrada' });
    }
  }
}
