"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profesional_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profesional"));
class ProfesionalesController {
    async index({ response }) {
        try {
            const profesionales = await Profesional_1.default.all();
            response.status(200).json({
                message: 'Lista de profesionales obtenida exitosamente.',
                data: profesionales
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener la lista de profesionales.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const profesional = await Profesional_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Profesional encontrado exitosamente.',
                data: profesional
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'nombre',
                'especialidad',
                'horario',
                'telefono',
                'id_usuario',
                'id_entidad',
            ]);
            const profesional = await Profesional_1.default.create(data);
            response.status(201).json({
                message: 'Profesional creado exitosamente.',
                data: profesional
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el profesional.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const profesional = await Profesional_1.default.findOrFail(params.id);
            const data = request.only([
                'nombre',
                'especialidad',
                'horario',
                'telefono',
                'id_usuario',
                'id_entidad',
            ]);
            profesional.merge(data);
            await profesional.save();
            response.status(200).json({
                message: 'Profesional actualizado exitosamente.',
                data: profesional
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const profesional = await Profesional_1.default.findOrFail(params.id);
            await profesional.delete();
            response.status(200).json({
                message: 'Profesional eliminado exitosamente.',
                data: profesional
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Profesional no encontrado' });
        }
    }
}
exports.default = ProfesionalesController;
//# sourceMappingURL=ProfesionalesController.js.map