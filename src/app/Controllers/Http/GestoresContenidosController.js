"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GestorContenido_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/GestorContenido"));
class GestoresContenidosController {
    async index({ response }) {
        try {
            const gestoresContenidos = await GestorContenido_1.default.all();
            response.status(200).json({
                message: 'Lista de Gestores de Contenido obtenida exitosamente.',
                data: gestoresContenidos
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de Gestores de Contenido.' });
        }
    }
    async show({ params, response }) {
        try {
            const gestorContenido = await GestorContenido_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información del Gestor de Contenido obtenida exitosamente.',
                data: gestorContenido
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'nombre',
                'telefono',
                'id_usuario',
            ]);
            const gestorContenido = await GestorContenido_1.default.create(data);
            response.status(201).json({
                message: 'Gestor de Contenido creado exitosamente.',
                data: gestorContenido
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear el Gestor de Contenido.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const gestorContenido = await GestorContenido_1.default.findOrFail(params.id);
            const data = request.only([
                'nombre',
                'telefono',
                'id_usuario',
            ]);
            gestorContenido.merge(data);
            await gestorContenido.save();
            response.status(200).json({
                message: 'Gestor de Contenido actualizado exitosamente.',
                data: gestorContenido
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const gestorContenido = await GestorContenido_1.default.findOrFail(params.id);
            await gestorContenido.delete();
            response.status(200).json({
                message: 'Gestor de Contenido eliminado exitosamente.',
                data: gestorContenido
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Gestor de Contenido no encontrado' });
        }
    }
}
exports.default = GestoresContenidosController;
//# sourceMappingURL=GestoresContenidosController.js.map