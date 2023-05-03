"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Administrador_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Administrador"));
class AdministradoresController {
    async index({ response }) {
        try {
            const administradores = await Administrador_1.default.all();
            response.status(200).json({
                message: 'Lista de Administradores obtenida exitosamente.',
                data: administradores
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de Administradores.' });
        }
    }
    async show({ params, response }) {
        try {
            const administrador = await Administrador_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información del Administrador obtenida exitosamente.',
                data: administrador
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Administrador no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['nombre', 'telefono', 'id_usuario']);
            const administrador = await Administrador_1.default.create(data);
            response.status(201).json({
                message: 'Administrador creado exitosamente.',
                data: administrador
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear el Administrador.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const administrador = await Administrador_1.default.findOrFail(params.id);
            const data = request.only(['nombre', 'telefono', 'id_usuario']);
            administrador.merge(data);
            await administrador.save();
            response.status(200).json({
                message: 'Administrador actualizado exitosamente.',
                data: administrador
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Administrador no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const administrador = await Administrador_1.default.findOrFail(params.id);
            await administrador.delete();
            response.status(200).json({
                message: 'Administrador eliminado exitosamente.',
                data: administrador
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Administrador no encontrado' });
        }
    }
}
exports.default = AdministradoresController;
//# sourceMappingURL=AdministradoresController.js.map