"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Citas', 'CitasController.index');
    Route_1.default.post('/Citas', 'CitasController.store');
    Route_1.default.get('/Citas/:id', 'CitasController.show');
    Route_1.default.put('/Citas/:id', 'CitasController.update');
    Route_1.default.delete('/Citas/:id', 'CitasController.destroy');
});
//# sourceMappingURL=Citas.js.map