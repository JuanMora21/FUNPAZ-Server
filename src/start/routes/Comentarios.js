"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Comentarios', 'ComentariosController.index');
    Route_1.default.post('/Comentarios', 'ComentariosController.store');
    Route_1.default.get('/Comentarios/:id', 'ComentariosController.show');
    Route_1.default.put('/Comentarios/:id', 'ComentariosController.update');
    Route_1.default.delete('/Comentarios/:id', 'ComentariosController.destroy');
});
//# sourceMappingURL=Comentarios.js.map