"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Administradores', 'AdministradoresController.index');
    Route_1.default.post('/Administradores', 'AdministradoresController.store');
    Route_1.default.get('/Administradores/:id', 'AdministradoresController.show');
    Route_1.default.put('/Administradores/:id', 'AdministradoresController.update');
    Route_1.default.delete('/Administradores/:id', 'AdministradoresController.destroy');
}).middleware(['auth:api', 'permiso']);
//# sourceMappingURL=Administradores.js.map