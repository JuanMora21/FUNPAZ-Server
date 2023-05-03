"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Servicios', 'ServiciosController.index');
    Route_1.default.post('/Servicios', 'ServiciosController.store');
    Route_1.default.get('/Servicios/:id', 'ServiciosController.show');
    Route_1.default.put('/Servicios/:id', 'ServiciosController.update');
    Route_1.default.delete('/Servicios/:id', 'ServiciosController.destroy');
});
//# sourceMappingURL=Servicios.js.map