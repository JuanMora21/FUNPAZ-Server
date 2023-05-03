"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Mapas', 'MapasController.index');
    Route_1.default.post('/Mapas', 'MapasController.store');
    Route_1.default.get('/Mapas/:id', 'MapasController.show');
    Route_1.default.put('/Mapas/:id', 'MapasController.update');
    Route_1.default.delete('/Mapas/:id', 'MapasController.destroy');
});
//# sourceMappingURL=Mapas.js.map