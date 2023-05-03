"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Entidades', 'EntidadesController.index');
    Route_1.default.post('/Entidades', 'EntidadesController.store');
    Route_1.default.get('/Entidades/:id', 'EntidadesController.show');
    Route_1.default.put('/Entidades/:id', 'EntidadesController.update');
    Route_1.default.delete('/Entidades/:id', 'EntidadesController.destroy');
});
//# sourceMappingURL=Entidades.js.map