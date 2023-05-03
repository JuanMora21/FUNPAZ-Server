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
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Cita_1 = __importDefault(require("./Cita"));
const Servicio_1 = __importDefault(require("./Servicio"));
const luxon_1 = require("luxon");
const Usuario_1 = __importDefault(require("./Usuario"));
const Entidad_1 = __importDefault(require("./Entidad"));
var especialidad;
(function (especialidad) {
    especialidad["Psiquiatria"] = "Psiquiatria";
    especialidad["Psicologia"] = "Psicologia";
})(especialidad || (especialidad = {}));
class Profesional extends Orm_1.BaseModel {
}
Profesional.table = 'profesionales';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Profesional.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Profesional.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Profesional.prototype, "especialidad", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Profesional.prototype, "horario", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Profesional.prototype, "telefono", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Profesional.prototype, "id_usuario", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Profesional.prototype, "id_entidad", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Entidad_1.default, {
        foreignKey: 'id_entidad',
    }),
    __metadata("design:type", Object)
], Profesional.prototype, "entidad", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Usuario_1.default, {
        foreignKey: 'id_usuario',
    }),
    __metadata("design:type", Object)
], Profesional.prototype, "usuario", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Cita_1.default, {
        foreignKey: 'id_profesional',
    }),
    __metadata("design:type", Object)
], Profesional.prototype, "citas", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Servicio_1.default, {
        pivotTable: 'profesionales_servicios',
        pivotForeignKey: 'id_profesional',
        pivotRelatedForeignKey: 'id_servicio',
    }),
    __metadata("design:type", Object)
], Profesional.prototype, "servicios", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Profesional.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Profesional.prototype, "updatedAt", void 0);
exports.default = Profesional;
//# sourceMappingURL=Profesional.js.map