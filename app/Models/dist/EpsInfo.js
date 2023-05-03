"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Orm_1 = require("@ioc:Adonis/Lucid/Orm");
var Paciente_1 = require("./Paciente");
var Eps_1 = require("App/Models/Eps");
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
var EpsInfo = /** @class */ (function (_super) {
    __extends(EpsInfo, _super);
    function EpsInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EpsInfo.table = 'eps_info';
    __decorate([
        Orm_1.column({ isPrimary: true })
    ], EpsInfo.prototype, "id");
    __decorate([
        Orm_1.column()
    ], EpsInfo.prototype, "id_eps");
    __decorate([
        Orm_1.column()
    ], EpsInfo.prototype, "regimen");
    __decorate([
        Orm_1.column()
    ], EpsInfo.prototype, "tipo_beneficiario");
    __decorate([
        Orm_1.column()
    ], EpsInfo.prototype, "rango_salarial");
    __decorate([
        Orm_1.column()
    ], EpsInfo.prototype, "estado");
    __decorate([
        Orm_1.hasMany(function () { return Paciente_1["default"]; }, {
            foreignKey: 'id_eps'
        })
    ], EpsInfo.prototype, "pacientes");
    __decorate([
        Orm_1.hasOne(function () { return Eps_1["default"]; }, {
            foreignKey: 'id_eps'
        })
    ], EpsInfo.prototype, "eps");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true })
    ], EpsInfo.prototype, "createdAt");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true })
    ], EpsInfo.prototype, "updatedAt");
    return EpsInfo;
}(Orm_1.BaseModel));
exports["default"] = EpsInfo;
