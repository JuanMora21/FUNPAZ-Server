"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/ProfesionalesServicios', 'ProfesionalesServiciosController.index');
    Route_1.default.post('/ProfesionalesServicios', 'ProfesionalesServiciosController.store');
    Route_1.default.get('/ProfesionalesServicios/:id', 'ProfesionalesServiciosController.show');
    Route_1.default.put('/ProfesionalesServicios/:id', 'ProfesionalesServiciosController.update');
    Route_1.default.delete('/ProfesionalesServicios/:id', 'ProfesionalesServiciosController.destroy');
});
//# sourceMappingURL=ProfesionalesServicios.js.map