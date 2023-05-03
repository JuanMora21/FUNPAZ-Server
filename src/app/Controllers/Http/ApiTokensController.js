"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiToken_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ApiToken"));
class ApiTokensController {
    async index({ response }) {
        try {
            const tokens = await ApiToken_1.default.query().preload('usuario');
            response.status(200).json({
                message: 'Lista de tokens obtenida exitosamente.',
                data: tokens,
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los tokens.',
                data: null,
            });
        }
    }
    async show({ params, response }) {
        try {
            const token = await ApiToken_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Token encontrado exitosamente.',
                data: token,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Token no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'id_usuario',
                'name',
                'type',
                'token',
            ]);
            const token = await ApiToken_1.default.create(data);
            response.status(201).json({
                message: 'Token creado exitosamente.',
                data: token,
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el token.',
                data: null,
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const token = await ApiToken_1.default.findOrFail(params.id);
            const data = request.only([
                'id_usuario',
                'name',
                'type',
                'token',
            ]);
            token.merge(data);
            await token.save();
            response.status(200).json({
                message: 'Token actualizado exitosamente.',
                data: token,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Token no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const token = await ApiToken_1.default.findOrFail(params.id);
            await token.delete();
            response.status(200).json({
                message: 'Token eliminado exitosamente.',
                data: token,
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Token no encontrado' });
        }
    }
}
exports.default = ApiTokensController;
//# sourceMappingURL=ApiTokensController.js.map