"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Multimedia_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Multimedia"));
class MultimediasController {
    async index({ response }) {
        try {
            const multimedias = await Multimedia_1.default.all();
            response.status(200).json({
                message: 'Lista de Multimedias obtenida exitosamente.',
                data: multimedias
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de Multimedias.' });
        }
    }
    async show({ params, response }) {
        try {
            const multimedia = await Multimedia_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de Multimedia obtenida exitosamente.',
                data: multimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Multimedia no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'nombre',
                'tipo',
                'formato',
                'url',
                'descripcion',
            ]);
            const multimedia = await Multimedia_1.default.create(data);
            response.status(201).json({
                message: 'Multimedia creada exitosamente.',
                data: multimedia
            });
        }
        catch (error) {
            response.status(400).json({ message: 'Error al crear Multimedia.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const multimedia = await Multimedia_1.default.findOrFail(params.id);
            const data = request.only([
                'nombre',
                'tipo',
                'formato',
                'url',
                'descripcion',
            ]);
            multimedia.merge(data);
            await multimedia.save();
            response.status(200).json({
                message: 'Multimedia actualizada exitosamente.',
                data: multimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Multimedia no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const multimedia = await Multimedia_1.default.findOrFail(params.id);
            await multimedia.delete();
            response.status(200).json({
                message: 'Multimedia eliminada exitosamente.',
                data: multimedia
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Multimedia no encontrada' });
        }
    }
}
exports.default = MultimediasController;
//# sourceMappingURL=MultimediasController.js.map