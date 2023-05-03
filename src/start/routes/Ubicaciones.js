"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Ubicaciones', 'UbicacionesController.index');
    Route_1.default.post('/Ubicaciones', 'UbicacionesController.store');
    Route_1.default.get('/Ubicaciones/:id', 'UbicacionesController.show');
    Route_1.default.put('/Ubicaciones/:id', 'UbicacionesController.update');
    Route_1.default.delete('/Ubicaciones/:id', 'UbicacionesController.destroy');
});
//# sourceMappingURL=Ubicaciones.js.map