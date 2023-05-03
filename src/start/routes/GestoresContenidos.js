"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/GestoresContenidos', 'GestoresContenidosController.index');
    Route_1.default.post('/GestoresContenidos', 'GestoresContenidosController.store');
    Route_1.default.get('/GestoresContenidos/:id', 'GestoresContenidosController.show');
    Route_1.default.put('/GestoresContenidos/:id', 'GestoresContenidosController.update');
    Route_1.default.delete('/GestoresContenidos/:id', 'GestoresContenidosController.destroy');
});
//# sourceMappingURL=GestoresContenidos.js.map