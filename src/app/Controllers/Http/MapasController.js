"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mapa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Mapa"));
class MapasController {
    async index({ response }) {
        try {
            const mapas = await Mapa_1.default.all();
            response.status(200).json({
                message: 'Lista de mapas obtenida exitosamente.',
                data: mapas
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de mapas.' });
        }
    }
    async show({ params, response }) {
        try {
            const mapa = await Mapa_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información del mapa obtenida exitosamente.',
                data: mapa
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Mapa no encontrado' });
        }
    }
    async update({ params, response }) {
        try {
            const mapa = await Mapa_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información del mapa actualizada exitosamente.',
                data: mapa
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Mapa no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const mapa = await Mapa_1.default.findOrFail(params.id);
            await mapa.delete();
            response.status(200).json({
                message: 'Mapa eliminado exitosamente.',
                data: mapa
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Mapa no encontrado' });
        }
    }
}
exports.default = MapasController;
//# sourceMappingURL=MapasController.js.map