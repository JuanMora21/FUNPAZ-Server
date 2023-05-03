"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class PlantillaSeguridad {
    newLogin() {
        let html = '<p>Se ha registrado un nuevo inicio de sesión</p>';
        return html;
    }
    forgotPassword(token) {
        let html = '<h1>Sistema Demo-Adonis</h1>';
        html +=
            "<p>Para solicitar el restablecimiento de su contraseña ingrese <a href='" +
                Env_1.default.get('URL_FRONTEND') +
                '/#/security/change-password/' +
                token +
                "'>aquí</a></p>";
        return html;
    }
    resetPassword(token) {
        let html = '<h1>Sistema Demo-Adonis</h1>';
        html +=
            "<p>Para cambiar su contraseña ingrese <ahref='" +
                Env_1.default.get('URL_FRONTEND') +
                '/#/security/change-password/' +
                token +
                "'>aquí</a></p>";
        return html;
    }
}
exports.default = PlantillaSeguridad;
//# sourceMappingURL=PlantillaSeguridad.js.map