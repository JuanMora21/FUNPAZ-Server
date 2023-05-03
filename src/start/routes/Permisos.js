"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Permisos', 'PermisosController.index');
    Route_1.default.post('/Permisos', 'PermisosController.store');
    Route_1.default.get('/Permisos/:id', 'PermisosController.show');
    Route_1.default.put('/Permisos/:id', 'PermisosController.update');
    Route_1.default.delete('/Permisos/:id', 'PermisosController.destroy');
});
//# sourceMappingURL=Permisos.js.map