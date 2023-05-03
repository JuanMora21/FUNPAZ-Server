import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EpsInfo from 'App/Models/EpsInfo';

export default class EpsInfoInfoController {
  public async index({ response }: HttpContextContract) {
    try {
      const epsInfo = await EpsInfo.all();
      response.status(200).json({
        message: 'Lista de EPS Info obtenida exitosamente.',
        data: epsInfo
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de EPS Info.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const epsInfo = await EpsInfo.findOrFail(params.id);
      response.status(200).json({
        message: 'Información de la EPS Info obtenida exitosamente.',
        data: epsInfo
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS Info no encontrada' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'id_eps',
        'regimen',
        'tipo_beneficiario',
        'rango_salarial',
        'estado',
      ]);
      const epsInfo = await EpsInfo.create(data);
      response.status(201).json({
        message: 'EPS Info creada exitosamente.',
        data: epsInfo
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear la EPS Info.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const epsInfo = await EpsInfo.findOrFail(params.id);
      const data = request.only([
        'id_eps',
        'regimen',
        'tipo_beneficiario',
        'rango_salarial',
        'estado',
      ]);
      epsInfo.merge(data);
      await epsInfo.save();
      response.status(200).json({
        message: 'EPS Info actualizada exitosamente.',
        data: epsInfo
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS Info no encontrada' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const epsInfo = await EpsInfo.findOrFail(params.id);
      await epsInfo.delete();
      response.status(200).json({
        message: 'EPS Info eliminada exitosamente.',
        data: epsInfo
      });
    } catch (error) {
      response.status(404).json({ message: 'EPS Info no encontrada' });
    }
  }
}
