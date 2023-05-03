"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
const EmailService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/EmailService"));
const PlantillaSeguridad_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/EmailsTemplates/PlantillaSeguridad"));
class SeguridadsController {
    async login({ auth, request, response }) {
        const correo_electronico = request.input('correo_electronico');
        const contrasena = request.input('contrasena');
        try {
            const el_usuario = await Usuario_1.default.query().where('correo_electronico', correo_electronico).firstOrFail();
            if (await Hash_1.default.verify(el_usuario.contrasena, contrasena)) {
                const token = await auth.use('api').generate(el_usuario, {
                    expiresIn: '60 mins',
                });
                let plantilla_correo_electronico = new PlantillaSeguridad_1.default();
                let html = plantilla_correo_electronico.newLogin();
                let el_servicio_correo_electronico = new EmailService_1.default();
                el_servicio_correo_electronico.sendEmail(correo_electronico, 'Nuevo Inicio de Sesión', html);
                await el_usuario.load('rol');
                el_usuario.contrasena = '';
                response.status(200).json({
                    message: 'Inicio de sesión exitoso.',
                    token: token,
                    usuario: el_usuario,
                });
            }
            else {
                response.status(401).json({ message: 'Credenciales inválidas' });
            }
        }
        catch (error) {
            response.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    async logout({ auth }) {
        await auth.use('api').revoke();
        return {
            revoked: true,
        };
    }
    async forgotPassword({ auth, request, response }) {
        const correo_electronico = request.input('correo_electronico');
        try {
            const el_usuario = await Usuario_1.default.query().where('correo_electronico', correo_electronico).firstOrFail();
            const token = await auth.use('api').generate(el_usuario, {
                expiresIn: '60 mins',
            });
            let plantilla_correo_electronico = new PlantillaSeguridad_1.default();
            let html = plantilla_correo_electronico.forgotPassword(token.token);
            let el_servicio_correo_electronico = new EmailService_1.default();
            el_servicio_correo_electronico.sendEmail(correo_electronico, 'Solicitud restablecimiento de contraseña', html);
            response.status(200).json({
                status: 'success',
                message: 'Revisar el correo electrónico',
            });
        }
        catch (error) {
            response.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    async resetPassword({ auth, request, response }) {
        try {
            await auth.use('api').authenticate();
            auth.use('api').isAuthenticated;
            const el_usuario = await Usuario_1.default.findBy('correo_electronico', auth.user.correo_electronico);
            if (!el_usuario) {
                response.status(404).json({ message: 'Usuario no encontrado' });
            }
            else {
                el_usuario.contrasena = request.input('contrasena');
                await el_usuario.save();
                await auth.use('api').revoke();
                response.status(200).json({
                    status: 'success',
                    message: 'La contraseña se ha restaurado correctamente',
                });
            }
        }
        catch (error) {
            response.status(401).json({
                status: 'error',
                message: 'Token corrupto',
            });
        }
    }
}
exports.default = SeguridadsController;
//# sourceMappingURL=SeguridadController.js.map