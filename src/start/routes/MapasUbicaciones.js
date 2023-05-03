"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/MapasUbicaciones', 'MapasUbicacionesController.index');
    Route_1.default.post('/MapasUbicaciones', 'MapasUbicacionesController.store');
    Route_1.default.get('/MapasUbicaciones/:id', 'MapasUbicacionesController.show');
    Route_1.default.put('/MapasUbicaciones/:id', 'MapasUbicacionesController.update');
    Route_1.default.delete('/MapasUbicaciones/:id', 'MapasUbicacionesController.destroy');
});
//# sourceMappingURL=MapasUbicaciones.js.map