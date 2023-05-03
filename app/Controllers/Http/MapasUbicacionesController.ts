import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MapaUbicacion from 'App/Models/MapaUbicacion';

export default class MapasUbicacionesController {
  public async index({ response }: HttpContextContract) {
    try {
      const mapasUbicaciones = await MapaUbicacion.all();
      response.status(200).json({
        message: 'Lista de MapasUbicaciones obtenida exitosamente.',
        data: mapasUbicaciones
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de MapasUbicaciones.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const mapaUbicacion = await MapaUbicacion.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de MapaUbicacion obtenida exitosamente.',
        data: mapaUbicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'MapaUbicacion no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['id_mapa', 'id_ubicacion']);
      const mapaUbicacion = await MapaUbicacion.create(data);
      response.status(201).json({
        message: 'MapaUbicacion creada exitosamente.',
        data: mapaUbicacion
      });
    } catch (error) {
      response.status(400).json({ message: 'Error al crear MapaUbicacion.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const mapaUbicacion = await MapaUbicacion.findOrFail(params.id);
      const data = request.only(['id_mapa', 'id_ubicacion']);
      mapaUbicacion.merge(data);
      await mapaUbicacion.save();
      response.status(200).json({
        message: 'MapaUbicacion actualizada exitosamente.',
        data: mapaUbicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'MapaUbicacion no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const mapaUbicacion = await MapaUbicacion.findOrFail(params.id);
      await mapaUbicacion.delete();
      response.status(200).json({
        message: 'MapaUbicacion eliminada exitosamente.',
        data: mapaUbicacion
      });
    } catch (error) {
      response.status(404).json({ message: 'MapaUbicacion no encontrada' });
    }
  }
}
