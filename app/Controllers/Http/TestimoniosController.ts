import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Testimonio from 'App/Models/Testimonio';

export default class TestimoniosController {
  public async index({ response }: HttpContextContract) {
    try {
      const testimonios = await Testimonio.all();
      response.status(200).json({
        message: 'Lista de testimonios obtenida exitosamente.',
        data: testimonios
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los testimonios.',
        data: null
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const testimonio = await Testimonio.findOrFail(params.id);
      response.status(200).json({
        message: 'Testimonio encontrado exitosamente.',
        data: testimonio
      });
    } catch (error) {
      response.status(404).json({ message: 'Testimonio no encontrado' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'id_paciente',
        'fecha_publicacion',
        'contenido',
      ]);
      const testimonio = await Testimonio.create(data);
      response.status(201).json({
        message: 'Testimonio creado exitosamente.',
        data: testimonio
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el testimonio.',
        data: null
      });
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    try {
      const testimonio = await Testimonio.findOrFail(params.id);
      const data = request.only([
        'id_paciente',
        'fecha_publicacion',
        'contenido',
      ]);
      testimonio.merge(data);
      await testimonio.save();
      response.status(200).json({
        message: 'Testimonio actualizado exitosamente.',
        data: testimonio
      });
    } catch (error) {
      response.status(404).json({ message: 'Testimonio no encontrado' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const testimonio = await Testimonio.findOrFail(params.id);
      await testimonio.delete();
      response.status(200).json({
        message: 'Testimonio eliminado exitosamente.',
        data: testimonio
      });
    } catch (error) {
      response.status(404).json({ message: 'Testimonio no encontrado' });
    }
  }
}