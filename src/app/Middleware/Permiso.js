"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/auth/build/standalone");
const Permiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permiso"));
const RolPermiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RolPermiso"));
class PermisoGuard {
    async handle({ auth, request }, next) {
        const url = request.url();
        const metodo = request.method();
        const parts = url.split('/');
        let new_url = "/" + parts[1];
        const usuario_id_rol = auth.user?.id_rol;
        let has_Permisos;
        has_Permisos = await this.verifyPermisos(usuario_id_rol, new_url, metodo);
        if (!has_Permisos) {
            throw new standalone_1.AuthenticationException('Missing right Permisos', 'E_MISSINGS_PermisoS');
        }
        console.log("Permiso otorgado");
        await next();
    }
    async verifyPermisos(usuario_id_rol, url, metodo) {
        let rolPermiso = await RolPermiso_1.default.query().where('id_rol', '=', usuario_id_rol);
        for (let i = 0; i < rolPermiso.length; i++) {
            let permiso = await Permiso_1.default.find(rolPermiso[i].id_permiso);
            if (permiso?.url == url && permiso?.metodo == metodo.toUpperCase())
                return true;
        }
        return false;
    }
}
exports.default = PermisoGuard;
//# sourceMappingURL=Permiso.js.map