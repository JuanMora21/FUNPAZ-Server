"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/EntidadesMultimedias', 'EntidadesMultimediasController.index');
    Route_1.default.post('/EntidadesMultimedias', 'EntidadesMultimediasController.store');
    Route_1.default.get('/EntidadesMultimedias/:id', 'EntidadesMultimediasController.show');
    Route_1.default.put('/EntidadesMultimedias/:id', 'EntidadesMultimediasController.update');
    Route_1.default.delete('/EntidadesMultimedias/:id', 'EntidadesMultimediasController.destroy');
});
//# sourceMappingURL=EntidadesMultimedia.js.map