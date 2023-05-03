"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cita"));
class CitasController {
    async index({ response }) {
        try {
            const citas = await Cita_1.default.all();
            response.status(200).json({
                message: 'Lista de citas obtenida exitosamente.',
                data: citas
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al obtener la lista de citas.' });
        }
    }
    async show({ params, response }) {
        try {
            const cita = await Cita_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Información de la cita obtenida exitosamente.',
                data: cita
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Cita no encontrada' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'fecha',
                'hora',
                'duracion',
                'motivo',
                'estado',
                'id_paciente',
                'id_profesional',
            ]);
            const cita = await Cita_1.default.create(data);
            response.status(201).json({
                message: 'Cita creada exitosamente.',
                data: cita
            });
        }
        catch (error) {
            response.status(500).json({ message: 'Error al crear la cita.' });
        }
    }
    async update({ request, params, response }) {
        try {
            const cita = await Cita_1.default.findOrFail(params.id);
            const data = request.only([
                'fecha',
                'hora',
                'duracion',
                'motivo',
                'estado',
                'id_paciente',
                'id_profesional',
            ]);
            cita.merge(data);
            await cita.save();
            response.status(200).json({
                message: 'Cita actualizada exitosamente.',
                data: cita
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Cita no encontrada' });
        }
    }
    async destroy({ params, response }) {
        try {
            const cita = await Cita_1.default.findOrFail(params.id);
            await cita.delete();
            response.status(200).json({
                message: 'Cita eliminada exitosamente.',
                data: cita
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Cita no encontrada' });
        }
    }
}
exports.default = CitasController;
//# sourceMappingURL=CitasController.js.map