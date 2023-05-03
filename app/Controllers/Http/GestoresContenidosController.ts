import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GestorContenido from 'App/Models/GestorContenido';

export default class GestoresContenidosController {
  public async index({ response }: HttpContextContract) {
    try {
      const gestoresContenidos = await GestorContenido.all();
      response.status(200).json({
        message: 'Lista de Gestores de Contenido obtenida exitosamente.',
        data: gestoresContenidos
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al obtener la lista de Gestores de Contenido.' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const gestorContenido = await GestorContenido.findOrFail(params.id);
      response.status(200).json({
        message: 'Información del Gestor de Contenido obtenida exitosamente.',
        data: gestorContenido
      });
    } catch (error) {
      response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'telefono',
        'id_usuario',
      ]);
      const gestorContenido = await GestorContenido.create(data);
      response.status(201).json({
        message: 'Gestor de Contenido creado exitosamente.',
        data: gestorContenido
      });
    } catch (error) {
      response.status(500).json({ message: 'Error al crear el Gestor de Contenido.' });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const gestorContenido = await GestorContenido.findOrFail(params.id);
      const data = request.only([
        'nombre',
        'telefono',
        'id_usuario',
      ]);
      gestorContenido.merge(data);
      await gestorContenido.save();
      response.status(200).json({
        message: 'Gestor de Contenido actualizado exitosamente.',
        data: gestorContenido
      });
    } catch (error) {
      response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const gestorContenido = await GestorContenido.findOrFail(params.id);
      await gestorContenido.delete();
      response.status(200).json({
        message: 'Gestor de Contenido eliminado exitosamente.',
        data: gestorContenido
      });
    } catch (error) {
      response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
    }
  }
}
