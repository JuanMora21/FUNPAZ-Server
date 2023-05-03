"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.post('/login', 'SeguridadController.login');
Route_1.default.post('/forgot', 'SeguridadController.forgotPassword');
Route_1.default.post('/reset', 'SeguridadController.resetPassword');
Route_1.default.post('/logout', 'SeguridadController.logout');
require("./routes/Administradores");
require("./routes/GestoresContenidos");
require("./routes/Profesionales");
require("./routes/Pacientes");
require("./routes/Usuarios");
require("./routes/Permisos");
require("./routes/Roles");
require("./routes/UsuariosPermisos");
require("./routes/ProfesionalesServicios");
require("./routes/Eps");
require("./routes/Citas");
require("./routes/Comentarios");
require("./routes/Testimonios");
require("./routes/Servicios");
require("./routes/Publicaciones");
require("./routes/Multimedias");
require("./routes/Mapas");
require("./routes/Ubicaciones");
require("./routes/Entidades");
require("./routes/EntidadesMultimedia");
require("./routes/MapasUbicaciones");
//# sourceMappingURL=routes.js.map