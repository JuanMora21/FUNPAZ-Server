"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Multimedias', 'MultimediasController.index');
    Route_1.default.post('/Multimedias', 'MultimediasController.store');
    Route_1.default.get('/Multimedias/:id', 'MultimediasController.show');
    Route_1.default.put('/Multimedias/:id', 'MultimediasController.update');
    Route_1.default.delete('/Multimedias/:id', 'MultimediasController.destroy');
});
//# sourceMappingURL=Multimedias.js.map