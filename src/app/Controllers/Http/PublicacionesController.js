"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Publicacion_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Publicacion"));
class PublicacionesController {
    async index({ response }) {
        try {
            const publicaciones = await Publicacion_1.default.all();
            response.status(200).json({
                message: 'Lista de publicaciones obtenida exitosamente.',
                data: publicaciones
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener la lista de publicaciones.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const publicacion = await Publicacion_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Publicación encontrada exitosamente.',
                data: publicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Publicación no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'titulo',
                'autor',
                'fecha_publicacion',
                'categoria',
                'contenido',
                'etiquetas',
                'id_entidad',
            ]);
            const publicacion = await Publicacion_1.default.create(data);
            response.status(201).json({
                message: 'Publicación creada exitosamente.',
                data: publicacion
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear la publicación.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const publicacion = await Publicacion_1.default.findOrFail(params.id);
            const data = request.only([
                'titulo',
                'autor',
                'fecha_publicacion',
                'categoria',
                'contenido',
                'etiquetas',
                'id_entidad',
            ]);
            publicacion.merge(data);
            await publicacion.save();
            response.status(200).json({
                message: 'Publicación actualizada exitosamente.',
                data: publicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Publicación no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const publicacion = await Publicacion_1.default.findOrFail(params.id);
            await publicacion.delete();
            response.status(200).json({
                message: 'Publicación eliminada exitosamente.',
                data: publicacion
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Publicación no encontrada' });
        }
    }
}
exports.default = PublicacionesController;
//# sourceMappingURL=PublicacionesController.js.map