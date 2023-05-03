"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comentario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Comentario"));
class ComentariosController {
    async index({ response }) {
        try {
            const comentarios = await Comentario_1.default.all();
            response.status(200).json({
                message: 'Lista de comentarios obtenida exitosamente.',
                data: comentarios
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de comentarios.' });
        }
    }
    async show({ params, response }) {
        try {
            const comentario = await Comentario_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información del comentario obtenida exitosamente.',
                data: comentario
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Comentario no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'id_paciente',
                'autor',
                'fecha_publicacion',
                'contenido',
                'id_publicacion',
            ]);
            const comentario = await Comentario_1.default.create(data);
            response.status(201).json({
                message: 'Comentario creado exitosamente.',
                data: comentario
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear el comentario.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const comentario = await Comentario_1.default.findOrFail(params.id);
            const data = request.only([
                'id_paciente',
                'autor',
                'fecha_publicacion',
                'contenido',
                'id_publicacion',
            ]);
            comentario.merge(data);
            await comentario.save();
            response.status(200).json({
                message: 'Comentario actualizado exitosamente.',
                data: comentario
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Comentario no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const comentario = await Comentario_1.default.findOrFail(params.id);
            await comentario.delete();
            response.status(200).json({
                message: 'Comentario eliminado exitosamente.',
                data: comentario
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Comentario no encontrado' });
        }
    }
}
exports.default = ComentariosController;
//# sourceMappingURL=ComentariosController.js.map