"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RolPermiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RolPermiso"));
class RolesPermisosController {
    async index({ response }) {
        try {
            const RolesPermisos = await RolPermiso_1.default.all();
            response.status(200).json({
                message: 'Lista de roles y permisos obtenida exitosamente.',
                data: RolesPermisos
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los roles y permisos.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const RolesPermisos = await RolPermiso_1.default.findOrFail({
                id_rol: params.id_rol,
                id_permiso: params.id_permiso,
            });
            response.status(200).json({
                message: 'Rol y permiso encontrado exitosamente.',
                data: RolesPermisos
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol y permiso no encontrados' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['id_rol', 'id_permiso']);
            const RolesPermisos = await RolPermiso_1.default.create(data);
            response.status(201).json({
                message: 'Rol y permiso creado exitosamente.',
                data: RolesPermisos
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el Rol y permiso.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const RolesPermisos = await RolPermiso_1.default.findOrFail({
                id_rol: params.id_rol,
                id_permiso: params.id_permiso,
            });
            const data = request.only(['id_rol', 'id_permiso']);
            RolesPermisos.merge(data);
            await RolesPermisos.save();
            response.status(200).json({
                message: 'Rol y permiso actualizados exitosamente.',
                data: RolesPermisos
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol y permiso no encontrados' });
        }
    }
    async destroy({ params, response }) {
        try {
            const RolesPermisos = await RolPermiso_1.default.findOrFail({
                id_rol: params.id_rol,
                id_permiso: params.id_permiso,
            });
            await RolesPermisos.delete();
            response.status(200).json({
                message: 'Rol y permiso eliminados exitosamente.',
                data: RolesPermisos
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Rol y permiso no encontrados' });
        }
    }
}
exports.default = RolesPermisosController;
//# sourceMappingURL=RolesPermisosController.js.map