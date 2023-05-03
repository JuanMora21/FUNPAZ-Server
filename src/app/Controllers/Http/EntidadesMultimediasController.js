"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntidadMultimedia_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/EntidadMultimedia"));
class EntidadesMultimediasController {
    async index({ response }) {
        try {
            const entidadesMultimedias = await EntidadMultimedia_1.default.all();
            response.status(200).json({
                message: 'Lista de entidades multimedia obtenida exitosamente.',
                data: entidadesMultimedias
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de entidades multimedia.' });
        }
    }
    async show({ params, response }) {
        try {
            const entidadMultimedia = await EntidadMultimedia_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de la entidad multimedia obtenida exitosamente.',
                data: entidadMultimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['id_entidad', 'id_multimedia']);
            const entidadMultimedia = await EntidadMultimedia_1.default.create(data);
            response.status(201).json({
                message: 'Entidad multimedia creada exitosamente.',
                data: entidadMultimedia
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear la entidad multimedia.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const entidadMultimedia = await EntidadMultimedia_1.default.findOrFail(params.id);
            const data = request.only(['id_entidad', 'id_multimedia']);
            entidadMultimedia.merge(data);
            await entidadMultimedia.save();
            response.status(200).json({
                message: 'Entidad multimedia actualizada exitosamente.',
                data: entidadMultimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const entidadMultimedia = await EntidadMultimedia_1.default.findOrFail(params.id);
            await entidadMultimedia.delete();
            response.status(200).json({
                message: 'Entidad multimedia eliminada exitosamente.',
                data: entidadMultimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EntidadMultimedia no encontrada' });
        }
    }
}
exports.default = EntidadesMultimediasController;
//# sourceMappingURL=EntidadesMultimediasController.js.map