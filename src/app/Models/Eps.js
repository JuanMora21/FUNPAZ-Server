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
const Paciente_1 = __importDefault(require("./Paciente"));
const luxon_1 = require("luxon");
var regimen;
(function (regimen) {
    regimen["Contributivo"] = "Contributivo";
    regimen["Subsidiado"] = "Subsidiado";
})(regimen || (regimen = {}));
var tipoBeneficiario;
(function (tipoBeneficiario) {
    tipoBeneficiario["Cotizante"] = "Cotizante";
    tipoBeneficiario["Beneficiario"] = "Beneficiario";
})(tipoBeneficiario || (tipoBeneficiario = {}));
var rangoSalarial;
(function (rangoSalarial) {
    rangoSalarial["Rango1"] = "Rango 1";
    rangoSalarial["Rango2"] = "Rango 2";
    rangoSalarial["Rango3"] = "Rango 3";
})(rangoSalarial || (rangoSalarial = {}));
var estado;
(function (estado) {
    estado["Activo"] = "Activo";
    estado["Inactivo"] = "Inactivo";
    estado["Retirado"] = "Retirado";
    estado["EnEspera"] = "En espera";
    estado["Suspendido"] = "Suspendido";
})(estado || (estado = {}));
class EPS extends Orm_1.BaseModel {
}
EPS.table = 'eps';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], EPS.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], EPS.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], EPS.prototype, "regimen", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], EPS.prototype, "tipo_beneficiario", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], EPS.prototype, "rango_salarial", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], EPS.prototype, "estado", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Paciente_1.default, {
        foreignKey: 'id_eps',
    }),
    __metadata("design:type", Object)
], EPS.prototype, "pacientes", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], EPS.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], EPS.prototype, "updatedAt", void 0);
exports.default = EPS;
//# sourceMappingURL=Eps.js.map