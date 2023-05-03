"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rol_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Rol"));
class RolesController {
    async index({ response }) {
        try {
            const roles = await Rol_1.default.all();
            response.status(200).json({
                message: 'Lista de roles obtenida exitosamente.',
                data: roles
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los roles.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const rol = await Rol_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Rol encontrado exitosamente.',
                data: rol
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['nombre']);
            const rol = await Rol_1.default.create(data);
            response.status(201).json({
                message: 'Rol creado exitosamente.',
                data: rol
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el rol.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const rol = await Rol_1.default.findOrFail(params.id);
            const data = request.only(['nombre']);
            rol.merge(data);
            await rol.save();
            response.status(200).json({
                message: 'Rol actualizado exitosamente.',
                data: rol
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const rol = await Rol_1.default.findOrFail(params.id);
            await rol.delete();
            response.status(200).json({
                message: 'Rol eliminado exitosamente.',
                data: rol
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol no encontrado' });
        }
    }
}
exports.default = RolesController;
//# sourceMappingURL=RolesController.js.map