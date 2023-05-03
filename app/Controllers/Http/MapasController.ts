import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Mapa from 'App/Models/Mapa';

export default class MapasController {
  public async index({ response }: HttpContextContract) {
    try {
      const mapas = await Mapa.all();
      response.status(200).json({
        message: 'Lista de mapas obtenida exitosamente.',
        data: mapas
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de mapas.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const mapa = await Mapa.findOrFail(params.id);
      response.status(200).json({
        message: 'Información del mapa obtenida exitosamente.',
        data: mapa
      });
    } catch (error) {
      response.status(404).json({ message: 'Mapa no encontrado' });
    }
  }

  public async update({ params, response }: HttpContextContract) {
    try {
      const mapa = await Mapa.findOrFail(params.id);
      response.status(200).json({
        message: 'Información del mapa actualizada exitosamente.',
        data: mapa
      });
    } catch (error) {
      response.status(404).json({ message: 'Mapa no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const mapa = await Mapa.findOrFail(params.id);
      await mapa.delete();
      response.status(200).json({
        message: 'Mapa eliminado exitosamente.',
        data: mapa
      });
    } catch (error) {
      response.status(404).json({ message: 'Mapa no encontrado' });
    }
  }
}
