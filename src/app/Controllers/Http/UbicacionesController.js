"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ubicacion_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Ubicacion"));
class UbicacionesController {
    async index({ response }) {
        try {
            const ubicaciones = await Ubicacion_1.default.all();
            response.status(200).json({
                message: 'Lista de ubicaciones obtenida exitosamente.',
                data: ubicaciones,
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener las ubicaciones.',
                data: null,
            });
        }
    }
    async show({ params, response }) {
        try {
            const ubicacion = await Ubicacion_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Ubicación encontrada exitosamente.',
                data: ubicacion,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Ubicación no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'latitud',
                'longitud',
                'nombre',
                'id_entidad',
            ]);
            const ubicacion = await Ubicacion_1.default.create(data);
            response.status(201).json({
                message: 'Ubicación creada exitosamente.',
                data: ubicacion,
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear la ubicación.',
                data: null,
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const ubicacion = await Ubicacion_1.default.findOrFail(params.id);
            const data = request.only([
                'latitud',
                'longitud',
                'nombre',
                'id_entidad',
            ]);
            ubicacion.merge(data);
            await ubicacion.save();
            response.status(200).json({
                message: 'Ubicación actualizada exitosamente.',
                data: ubicacion,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Ubicación no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const ubicacion = await Ubicacion_1.default.findOrFail(params.id);
            await ubicacion.delete();
            response.status(200).json({
                message: 'Ubicación eliminada exitosamente.',
                data: ubicacion,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Ubicación no encontrada' });
        }
    }
}
exports.default = UbicacionesController;
//# sourceMappingURL=UbicacionesController.js.map