"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/RolesPermisos', 'RolesPermisosController.index');
    Route_1.default.post('/RolesPermisos', 'RolesPermisosController.store');
    Route_1.default.get('/RolesPermisos/:id', 'RolesPermisosController.show');
    Route_1.default.put('/RolesPermisos/:id', 'RolesPermisosController.update');
    Route_1.default.delete('/RolesPermisos/:id', 'RolesPermisosController.destroy');
});
//# sourceMappingURL=UsuariosPermisos.js.map