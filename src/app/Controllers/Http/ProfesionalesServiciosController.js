"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfesionalServicio_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProfesionalServicio"));
class ProfesionalesServiciosController {
    async index({ response }) {
        try {
            const profesionalesServicios = await ProfesionalServicio_1.default.all();
            response.status(200).json({
                message: 'Lista de profesionales y servicios obtenida exitosamente.',
                data: profesionalesServicios,
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener los profesionales y servicios.' });
        }
    }
    async show({ params, response }) {
        try {
            const profesionalServicio = await ProfesionalServicio_1.default.findOrFail(params.id_profesional, params.id_servicio);
            response.status(200).json({
                message: 'Profesional y servicio encontrado exitosamente.',
                data: profesionalServicio,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['id_profesional', 'id_servicio']);
            const profesionalServicio = await ProfesionalServicio_1.default.create(data);
            response.status(201).json({
                message: 'Profesional y servicio creado exitosamente.',
                data: profesionalServicio,
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear el profesional y servicio.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const profesionalServicio = await ProfesionalServicio_1.default.findOrFail(params.id_profesional, params.id_servicio);
            const data = request.only(['id_profesional', 'id_servicio']);
            profesionalServicio.merge(data);
            await profesionalServicio.save();
            response.status(200).json({
                message: 'Profesional y servicio actualizado exitosamente.',
                data: profesionalServicio,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
        }
    }
    async destroy({ params, response }) {
        try {
            const profesionalServicio = await ProfesionalServicio_1.default.findOrFail(params.id_profesional, params.id_servicio);
            await profesionalServicio.delete();
            response.status(200).json({
                message: 'Profesional y servicio eliminados exitosamente.',
                data: profesionalServicio,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional y servicio no encontrados.' });
        }
    }
}
exports.default = ProfesionalesServiciosController;
//# sourceMappingURL=ProfesionalesServiciosController.js.map