"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Servicio_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Servicio"));
class ServiciosController {
    async index({ response }) {
        try {
            const servicios = await Servicio_1.default.all();
            response.status(200).json({
                message: 'Lista de servicios obtenida exitosamente.',
                data: servicios
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los servicios.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const servicio = await Servicio_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Servicio encontrado exitosamente.',
                data: servicio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Servicio no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'nombre',
                'especialidad',
                'descripcion',
                'duracion',
                'tarifa_particular',
                'id_entidad',
            ]);
            const servicio = await Servicio_1.default.create(data);
            response.status(201).json({
                message: 'Servicio creado exitosamente.',
                data: servicio
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el servicio.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const servicio = await Servicio_1.default.findOrFail(params.id);
            const data = request.only([
                'nombre',
                'especialidad',
                'descripcion',
                'duracion',
                'tarifa_particular',
                'id_entidad',
            ]);
            servicio.merge(data);
            await servicio.save();
            response.status(200).json({
                message: 'Servicio actualizado exitosamente.',
                data: servicio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Servicio no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const servicio = await Servicio_1.default.findOrFail(params.id);
            await servicio.delete();
            response.status(200).json({
                message: 'Servicio eliminado exitosamente.',
                data: servicio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Servicio no encontrado' });
        }
    }
}
exports.default = ServiciosController;
//# sourceMappingURL=ServiciosController.js.map