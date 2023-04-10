import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Paciente from 'App/Models/Paciente';

export default class PacientesController {
  public async index({response}: HttpContextContract) {
    const pacientes = await Paciente.all();
    response.status(200).json({
        message: 'Lista de pacientes obtenida exitosamente.',
        data: pacientes
    })
  }

  public async store({ response, request }: HttpContextContract) {
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
    })
  }

  public async show({ response, params }: HttpContextContract) {
    const paciente = await Paciente.findOrFail(params.id);
    if (!paciente) {
        response.status(404).json({
            message: 'Paciente no encontrado.',
            data: null
        })
        return
    }
    const eps = await paciente.preload('eps')
  /*
    const citas = await paciente.citas().fetch()
    const eps = await paciente.eps().fetch()
    const comentarios = await paciente.comentarios().fetch()
    const testimonios = await paciente.testimonios().fetch()
  */
    response.status(200).json({
        message: 'Información del paciente obtenida exitosamente.',
        data: {
            paciente,
            eps,/*
            citas,
            eps,
            comentarios,
            testimonios*/
        }
    })
  }

  public async update({ response, request, params }: HttpContextContract) {
    const paciente = await Paciente.findOrFail(params.id);
    if (!paciente) {
        response.status(404).json({
          message: 'Paciente no encontrado.',
          data: null
        })
        return
    }
    const data = request.only(['numero_identificacion', 'tipo_identificacion', 'nombre', 'fecha_nacimiento', 'genero', 'estado_civil', 'idEps', 'direccion', 'telefono', 'correo_electronico', 'historial_medico']);
    paciente.merge(data);
    await paciente.save();
    response.status(200).json({
        message: 'Paciente actualizado exitosamente.',
        data: paciente
    })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const paciente = await Paciente.findOrFail(params.id);
    if (!paciente) {
        response.status(404).json({
          message: 'Paciente no encontrado.',
          data: null
        })
        return
    }

    await paciente.delete()

    response.status(200).json({
      message: 'Paciente eliminado exitosamente.',
      data: paciente
    })
  }
}

