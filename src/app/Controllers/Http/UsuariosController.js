"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class UsuariosController {
    async index({ response }) {
        try {
            const usuarios = await Usuario_1.default.all();
            response.status(200).json({
                message: 'Lista de usuarios obtenida exitosamente.',
                data: usuarios
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los usuarios.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const usuario = await Usuario_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Usuario encontrado exitosamente.',
                data: usuario
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'correo_electronico',
                'contrasena',
                'id_rol',
            ]);
            data.contrasena = await Hash_1.default.make(data.contrasena);
            const usuario = await Usuario_1.default.create(data);
            response.status(201).json({
                message: 'Usuario creado exitosamente.',
                data: usuario,
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el usuario.',
                data: null,
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const usuario = await Usuario_1.default.findOrFail(params.id);
            const data = request.only([
                'correo_electronico',
                'contrasena',
                'id_rol',
            ]);
            if (data.contrasena) {
                data.contrasena = await Hash_1.default.make(data.contrasena);
            }
            usuario.merge(data);
            await usuario.save();
            response.status(200).json({
                message: 'Usuario actualizado exitosamente.',
                data: usuario,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const usuario = await Usuario_1.default.findOrFail(params.id);
            await usuario.delete();
            response.status(200).json({
                message: 'Usuario eliminado exitosamente.',
                data: usuario
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
}
exports.default = UsuariosController;
//# sourceMappingURL=UsuariosController.js.map