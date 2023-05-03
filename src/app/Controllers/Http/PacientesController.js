"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paciente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Paciente"));
class PacientesController {
    async index({ response }) {
        try {
            const pacientes = await Paciente_1.default.all();
            response.status(200).json({
                message: 'Lista de pacientes obtenida exitosamente.',
                data: pacientes
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener la lista de pacientes.',
                data: null
            });
        }
    }
    async store({ response, request }) {
        try {
            const data = request.only(['numero_identificacion', 'tipo_identificacion', 'nombre', 'fecha_nacimiento', 'genero', 'estado_civil', 'idEps', 'direccion', 'telefono', 'correo_electronico', 'historial_medico']);
            const pacienteExistente = await Paciente_1.default.findBy('numero_identificacion', data.numero_identificacion);
            if (pacienteExistente) {
                response.status(409).json({
                    message: 'El paciente ya existe en la base de datos.',
                    data: null
                });
                return;
            }
            const paciente = await Paciente_1.default.create(data);
            response.status(201).json({
                message: 'Paciente creado exitosamente.',
                data: paciente
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el paciente.',
                data: null
            });
        }
    }
    async show({ response, params }) {
        try {
            const paciente = await Paciente_1.default.findOrFail(params.id);
            const eps = await paciente.preload('eps');
            const citas = await paciente.preload('citas');
            const comentarios = await paciente.preload('comentarios');
            const testimonios = await paciente.preload('testimonios');
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
        }
        catch (error) {
            response.status(404).json({
                message: 'Paciente no encontrado.',
                data: null
            });
        }
    }
    async update({ response, request, params }) {
        try {
            const paciente = await Paciente_1.default.findOrFail(params.id);
            const data = request.only(['numero_identificacion', 'tipo_identificacion', 'nombre', 'fecha_nacimiento', 'genero', 'estado_civil', 'idEps', 'direccion', 'telefono', 'correo_electronico', 'historial_medico']);
            paciente.merge(data);
            await paciente.save();
            response.status(200).json({
                message: 'Paciente actualizado exitosamente.',
                data: paciente
            });
        }
        catch (error) {
            response.status(404).json({
                message: 'Paciente no encontrado.',
                data: null
            });
        }
    }
    async destroy({ response, params }) {
        try {
            const paciente = await Paciente_1.default.findOrFail(params.id);
            await paciente.delete();
            response.status(200).json({
                message: 'Paciente eliminado exitosamente.',
                data: paciente
            });
        }
        catch (error) {
            response.status(404).json({
                message: 'Paciente no encontrado.',
                data: null
            });
        }
    }
}
exports.default = PacientesController;
//# sourceMappingURL=PacientesController.js.map