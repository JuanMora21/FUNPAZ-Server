"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/Roles', 'RolesController.index');
    Route_1.default.post('/Roles', 'RolesController.store');
    Route_1.default.get('/Roles/:id', 'RolesController.show');
    Route_1.default.put('/Roles/:id', 'RolesController.update');
    Route_1.default.delete('/Roles/:id', 'RolesController.destroy');
});
//# sourceMappingURL=Roles.js.map