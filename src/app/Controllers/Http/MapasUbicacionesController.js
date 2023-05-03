"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MapaUbicacion_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MapaUbicacion"));
class MapasUbicacionesController {
    async index({ response }) {
        try {
            const mapasUbicaciones = await MapaUbicacion_1.default.all();
            response.status(200).json({
                message: 'Lista de MapasUbicaciones obtenida exitosamente.',
                data: mapasUbicaciones
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de MapasUbicaciones.' });
        }
    }
    async show({ params, response }) {
        try {
            const mapaUbicacion = await MapaUbicacion_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de MapaUbicacion obtenida exitosamente.',
                data: mapaUbicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'MapaUbicacion no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['id_mapa', 'id_ubicacion']);
            const mapaUbicacion = await MapaUbicacion_1.default.create(data);
            response.status(201).json({
                message: 'MapaUbicacion creada exitosamente.',
                data: mapaUbicacion
            });
        }
        catch (error) {
            response.status(400).json({ message: 'Error al crear MapaUbicacion.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const mapaUbicacion = await MapaUbicacion_1.default.findOrFail(params.id);
            const data = request.only(['id_mapa', 'id_ubicacion']);
            mapaUbicacion.merge(data);
            await mapaUbicacion.save();
            response.status(200).json({
                message: 'MapaUbicacion actualizada exitosamente.',
                data: mapaUbicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'MapaUbicacion no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const mapaUbicacion = await MapaUbicacion_1.default.findOrFail(params.id);
            await mapaUbicacion.delete();
            response.status(200).json({
                message: 'MapaUbicacion eliminada exitosamente.',
                data: mapaUbicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'MapaUbicacion no encontrada' });
        }
    }
}
exports.default = MapasUbicacionesController;
//# sourceMappingURL=MapasUbicacionesController.js.map