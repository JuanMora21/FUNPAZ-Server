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
const Cita_1 = __importDefault(require("./Cita"));
const Profesional_1 = __importDefault(require("./Profesional"));
const Entidad_1 = __importDefault(require("./Entidad"));
var especialidad;
(function (especialidad) {
    especialidad["Psiquiatria"] = "Psiquiatria";
    especialidad["Psicologia"] = "Psicologia";
    especialidad["InternacionGeneral"] = "Internacion General";
    especialidad["InternacionEspecial"] = "Internacion Especial";
})(especialidad || (especialidad = {}));
class Servicio extends Orm_1.BaseModel {
}
Servicio.table = 'servicios';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Servicio.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Servicio.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Servicio.prototype, "especialidad", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Servicio.prototype, "descripcion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Servicio.prototype, "duracion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Servicio.prototype, "tarifa_particular", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Servicio.prototype, "id_entidad", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Entidad_1.default, {
        foreignKey: 'id_entidad',
    }),
    __metadata("design:type", Object)
], Servicio.prototype, "entidad", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Cita_1.default, {
        foreignKey: 'id_servicio',
    }),
    __metadata("design:type", Object)
], Servicio.prototype, "citas", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Profesional_1.default, {
        pivotTable: 'profesionales_servicios',
        pivotForeignKey: 'id_profesional',
        pivotRelatedForeignKey: 'id_servicio',
    }),
    __metadata("design:type", Object)
], Servicio.prototype, "profesionales", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Servicio.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Servicio.prototype, "updatedAt", void 0);
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map