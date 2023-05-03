"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Publicaciones', 'PublicacionesController.index');
    Route_1.default.post('/Publicaciones', 'PublicacionesController.store');
    Route_1.default.get('/Publicaciones/:id', 'PublicacionesController.show');
    Route_1.default.put('/Publicaciones/:id', 'PublicacionesController.update');
    Route_1.default.delete('/Publicaciones/:id', 'PublicacionesController.destroy');
});
//# sourceMappingURL=Publicaciones.js.map