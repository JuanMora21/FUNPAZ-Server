"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Eps_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Eps"));
class EpsController {
    async index({ response }) {
        try {
            const eps = await Eps_1.default.all();
            response.status(200).json({
                message: 'Lista de EPS obtenida exitosamente.',
                data: eps
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de EPS.' });
        }
    }
    async show({ params, response }) {
        try {
            const eps = await Eps_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de la EPS obtenida exitosamente.',
                data: eps
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EPS no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'nombre',
                'regimen',
                'tipo_beneficiario',
                'rango_salarial',
                'estado',
            ]);
            const eps = await Eps_1.default.create(data);
            response.status(201).json({
                message: 'EPS creada exitosamente.',
                data: eps
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear la EPS.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const eps = await Eps_1.default.findOrFail(params.id);
            const data = request.only([
                'nombre',
                'regimen',
                'tipo_beneficiario',
                'rango_salarial',
                'estado',
            ]);
            eps.merge(data);
            await eps.save();
            response.status(200).json({
                message: 'EPS actualizada exitosamente.',
                data: eps
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EPS no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const eps = await Eps_1.default.findOrFail(params.id);
            await eps.delete();
            response.status(200).json({
                message: 'EPS eliminada exitosamente.',
                data: eps
            });
        }
        catch (error) {
            response.status(404).json({ message: 'EPS no encontrada' });
        }
    }
}
exports.default = EpsController;
//# sourceMappingURL=EpsController.js.map