"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Profesionales', 'ProfesionalesController.index');
    Route_1.default.post('/Profesionales', 'ProfesionalesController.store');
    Route_1.default.get('/Profesionales/:id', 'ProfesionalesController.show');
    Route_1.default.put('/Profesionales/:id', 'ProfesionalesController.update');
    Route_1.default.delete('/Profesionales/:id', 'ProfesionalesController.destroy');
});
//# sourceMappingURL=Profesionales.js.map