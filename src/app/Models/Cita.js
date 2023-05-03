"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Paciente_1 = __importDefault(require("./Paciente"));
const Profesional_1 = __importDefault(require("./Profesional"));
var estado;
(function (estado) {
    estado["Pendiente"] = "Pendiente";
    estado["Confirmada"] = "Confirmada";
    estado["Cancelada"] = "Cancelada";
    estado["Reagendada"] = "Reagendada";
    estado["Completada"] = "Completada";
})(estado || (estado = {}));
class Cita extends Orm_1.BaseModel {
}
Cita.table = 'citas';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Cita.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], Cita.prototype, "fecha", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", luxon_1.DateTime)
], Cita.prototype, "hora", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Cita.prototype, "duracion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Cita.prototype, "motivo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Cita.prototype, "estado", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Cita.prototype, "id_paciente", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Cita.prototype, "id_profesional", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Paciente_1.default, { foreignKey: 'id_paciente' }),
    __metadata("design:type", Object)
], Cita.prototype, "paciente", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Profesional_1.default, { foreignKey: 'id_profesional' }),
    __metadata("design:type", Object)
], Cita.prototype, "profesional", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Cita.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Cita.prototype, "updatedAt", void 0);
exports.default = Cita;
//# sourceMappingURL=Cita.js.map