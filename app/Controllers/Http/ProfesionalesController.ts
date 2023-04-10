import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Profesional from 'App/Models/Profesional';

export default class ProfesionalesController {
  public async index({}: HttpContextContract) {
    const profesionales = await Profesional.all();
    return profesionales;
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nombre', 'especialidad', 'horario', 'telefono', 'correoElectronico']);
    const profesional = await Profesional.create(data);
    return profesional;
  }

  public async show({ params }: HttpContextContract) {
    const profesional = await Profesional.findOrFail(params.id);
    return profesional;
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params }: HttpContextContract) {
    const profesional = await Profesional.findOrFail(params.id);
    const data = request.only(['nombre', 'especialidad', 'horario', 'telefono', 'correoElectronico']);
    profesional.merge(data);
    await profesional.save();
    return profesional;
  }

  public async destroy({ params }: HttpContextContract) {
    const profesional = await Profesional.findOrFail(params.id);
    await profesional.delete();
    return { message: 'Profesional eliminado correctamente' };
  }
}
