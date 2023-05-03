"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Testimonios', 'TestimoniosController.index');
    Route_1.default.post('/Testimonios', 'TestimoniosController.store');
    Route_1.default.get('/Testimonios/:id', 'TestimoniosController.show');
    Route_1.default.put('/Testimonios/:id', 'TestimoniosController.update');
    Route_1.default.delete('/Testimonios/:id', 'TestimoniosController.destroy');
});
//# sourceMappingURL=Testimonios.js.map