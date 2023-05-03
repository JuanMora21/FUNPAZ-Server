"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Testimonio_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Testimonio"));
class TestimoniosController {
    async index({ response }) {
        try {
            const testimonios = await Testimonio_1.default.all();
            response.status(200).json({
                message: 'Lista de testimonios obtenida exitosamente.',
                data: testimonios
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al obtener los testimonios.',
                data: null
            });
        }
    }
    async show({ params, response }) {
        try {
            const testimonio = await Testimonio_1.default.findOrFail(params.id);
            response.status(200).json({
                message: 'Testimonio encontrado exitosamente.',
                data: testimonio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Testimonio no encontrado' });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only([
                'id_paciente',
                'fecha_publicacion',
                'contenido',
            ]);
            const testimonio = await Testimonio_1.default.create(data);
            response.status(201).json({
                message: 'Testimonio creado exitosamente.',
                data: testimonio
            });
        }
        catch (error) {
            response.status(500).json({
                message: 'Error al crear el testimonio.',
                data: null
            });
        }
    }
    async update({ request, params, response }) {
        try {
            const testimonio = await Testimonio_1.default.findOrFail(params.id);
            const data = request.only([
                'id_paciente',
                'fecha_publicacion',
                'contenido',
            ]);
            testimonio.merge(data);
            await testimonio.save();
            response.status(200).json({
                message: 'Testimonio actualizado exitosamente.',
                data: testimonio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Testimonio no encontrado' });
        }
    }
    async destroy({ params, response }) {
        try {
            const testimonio = await Testimonio_1.default.findOrFail(params.id);
            await testimonio.delete();
            response.status(200).json({
                message: 'Testimonio eliminado exitosamente.',
                data: testimonio
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Testimonio no encontrado' });
        }
    }
}
exports.default = TestimoniosController;
//# sourceMappingURL=TestimoniosController.js.map