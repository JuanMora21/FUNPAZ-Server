"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Permiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permiso"));
class PermisosController {
    async index({ response }) {
        try {
            const permisos = await Permiso_1.default.all();
            response.status(200).json({
                message: 'Lista de permisos obtenida exitosamente.',
                data: permisos
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener la lista de permisos.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const permiso = await Permiso_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Permiso encontrado exitosamente.',
                data: permiso
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Permiso no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'url',
                'metodo',
            ]);
            const permiso = await Permiso_1.default.create(data);
            response.status(201).json({
                message: 'Permiso creado exitosamente.',
                data: permiso
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el permiso.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const permiso = await Permiso_1.default.findOrFail(params.id);
            const data = request.only([
                'url',
                'metodo',
            ]);
            permiso.merge(data);
            await permiso.save();
            response.status(200).json({
                message: 'Permiso actualizado exitosamente.',
                data: permiso
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Permiso no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const permiso = await Permiso_1.default.findOrFail(params.id);
            await permiso.delete();
            response.status(200).json({
                message: 'Permiso eliminado exitosamente.',
                data: permiso
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Permiso no encontrado' });
        }
    }
}
exports.default = PermisosController;
//# sourceMappingURL=PermisosController.js.map