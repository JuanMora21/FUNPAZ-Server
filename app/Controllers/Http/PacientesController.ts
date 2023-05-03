import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Paciente from 'App/Models/Paciente';

export default class PacientesController {
  public async index({response}: HttpContextContract) {
    try {
      const pacientes = await Paciente.all();
      response.status(200).json({
          message: 'Lista de pacientes obtenida exitosamente.',
          data: pacientes
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener la lista de pacientes.',
        data: null
      });
    }
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const data = request.only(['numero_identificacion', 'tipo_identificacion', 'nombre', 'fecha_nacimiento', 'genero', 'estado_civil', 'idEps', 'direccion', 'telefono', 'correo_electronico', 'historial_medico']);
      const pacienteExistente = await Paciente.findBy('numero_identificacion', data.numero_identificacion)
      if (pacienteExistente) {
        response.status(409).json({
          message: 'El paciente ya existe en la base de datos.',
          data: null
        })
        return
      }

      const paciente = await Paciente.create(data);
      response.status(201).json({
          message: 'Paciente creado exitosamente.',
          data: paciente
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el paciente.',
        data: null
      });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const paciente = await Paciente.findOrFail(params.id);
      const eps = await paciente.preload('eps')
      const citas = await paciente.preload('citas')
      const comentarios = await paciente.preload('comentarios')
      const testimonios = await paciente.preload('testimonios')

      response.status(200).json({
          message: 'Información del paciente obtenida exitosamente.',
          data: {
              paciente,
              eps,
              citas,
              comentarios,
              testimonios
          }
      });
    } catch (error) {
      response.status(404).json({
        message: 'Paciente no encontrado.',
        data: null
      });
    }
  }

  public async update({ response, request, params }: HttpContextContract) {
    try {
      const paciente = await Paciente.findOrFail(params.id);
      const data = request.only(['numero_identificacion', 'tipo_identificacion', 'nombre', 'fecha_nacimiento', 'genero', 'estado_civil', 'idEps', 'direccion', 'telefono', 'correo_electronico', 'historial_medico']);
      paciente.merge(data);
      await paciente.save();
      response.status(200).json({
          message: 'Paciente actualizado exitosamente.',
          data: paciente
      });
    } catch (error) {
      response.status(404).json({
        message: 'Paciente no encontrado.',
        data: null
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const paciente = await Paciente.findOrFail(params.id);
      await paciente.delete()

      response.status(200).json({
        message: 'Paciente eliminado exitosamente.',
        data: paciente
      });
    } catch (error) {
      response.status(404).json({
        message: 'Paciente no encontrado.',
        data: null
      });
    }
  }
}