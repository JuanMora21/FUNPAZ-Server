"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Usuarios', 'UsuariosController.index');
    Route_1.default.post('/Usuarios', 'UsuariosController.store');
    Route_1.default.get('/Usuarios/:id', 'UsuariosController.show');
    Route_1.default.put('/Usuarios/:id', 'UsuariosController.update');
    Route_1.default.delete('/Usuarios/:id', 'UsuariosController.destroy');
});
//# sourceMappingURL=Usuarios.js.map