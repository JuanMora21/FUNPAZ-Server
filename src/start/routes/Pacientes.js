"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Pacientes', 'PacientesController.index');
    Route_1.default.post('/Pacientes', 'PacientesController.store');
    Route_1.default.get('/Pacientes/:id', 'PacientesController.show');
    Route_1.default.put('/Pacientes/:id', 'PacientesController.update');
    Route_1.default.delete('/Pacientes/:id', 'PacientesController.destroy');
});
//# sourceMappingURL=Pacientes.js.map