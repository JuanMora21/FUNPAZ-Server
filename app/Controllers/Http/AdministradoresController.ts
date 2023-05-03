import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Administrador from 'App/Models/Administrador';

export default class AdministradoresController {
  public async index({ response }: HttpContextContract) {
    try {
      const administradores = await Administrador.all();
      response.status(200).json({
        message: 'Lista de Administradores obtenida exitosamente.',
        data: administradores
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de Administradores.'});
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const administrador = await Administrador.findOrFail(params.id);
      response.status(200).json({
        message: 'Información del Administrador obtenida exitosamente.',
        data: administrador
      });
    } catch (error) {
      response.status(404).json({ message: 'Administrador no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['nombre', 'telefono', 'id_usuario']);
      const administrador = await Administrador.create(data);
      response.status(201).json({
        message: 'Administrador creado exitosamente.',
        data: administrador
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear el Administrador.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const administrador = await Administrador.findOrFail(params.id);
      const data = request.only(['nombre', 'telefono', 'id_usuario']);
      administrador.merge(data);
      await administrador.save();
      response.status(200).json({
        message: 'Administrador actualizado exitosamente.',
        data: administrador
      });
    } catch (error) {
      response.status(404).json({ message: 'Administrador no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const administrador = await Administrador.findOrFail(params.id);
      await administrador.delete();
      response.status(200).json({
        message: 'Administrador eliminado exitosamente.',
        data: administrador
      });
    } catch (error) {
      response.status(404).json({ message: 'Administrador no encontrado' });
    }
  }
}
