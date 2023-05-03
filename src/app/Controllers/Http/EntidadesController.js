"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Entidad_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Entidad"));
class EntidadesController {
    async index({ response }) {
        try {
            const entidades = await Entidad_1.default.all();
            response.status(200).json({
                message: 'Lista de entidades obtenida exitosamente.',
                data: entidades
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de entidades.' });
        }
    }
    async show({ params, response }) {
        try {
            const entidad = await Entidad_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de la entidad obtenida exitosamente.',
                data: entidad
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Entidad no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'tipo',
            ]);
            const entidad = await Entidad_1.default.create(data);
            response.status(201).json({
                message: 'Entidad creada exitosamente.',
                data: entidad
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear la entidad.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const entidad = await Entidad_1.default.findOrFail(params.id);
            const data = request.only([
                'tipo',
            ]);
            entidad.merge(data);
            await entidad.save();
            response.status(200).json({
                message: 'Entidad actualizada exitosamente.',
                data: entidad
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Entidad no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const entidad = await Entidad_1.default.findOrFail(params.id);
            await entidad.delete();
            response.status(200).json({
                message: 'Entidad eliminada exitosamente.',
                data: entidad
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Entidad no encontrada' });
        }
    }
}
exports.default = EntidadesController;
//# sourceMappingURL=EntidadesController.js.map