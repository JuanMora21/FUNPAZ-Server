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
const Comentario_1 = __importDefault(require("./Comentario"));
const Testimonio_1 = __importDefault(require("./Testimonio"));
const Eps_1 = __importDefault(require("./Eps"));
const luxon_1 = require("luxon");
const Usuario_1 = __importDefault(require("./Usuario"));
var tipoIdentificacion;
(function (tipoIdentificacion) {
    tipoIdentificacion["CC"] = "C.C";
    tipoIdentificacion["TI"] = "T.I";
    tipoIdentificacion["CE"] = "C.E";
    tipoIdentificacion["Pasaporte"] = "Pasaporte";
})(tipoIdentificacion || (tipoIdentificacion = {}));
var genero;
(function (genero) {
    genero["Masculino"] = "Masculino";
    genero["Femenino"] = "Femenino";
    genero["Otro"] = "Otro";
})(genero || (genero = {}));
var estadoCivil;
(function (estadoCivil) {
    estadoCivil["Soltero"] = "Solter@";
    estadoCivil["Casado"] = "Casad@";
    estadoCivil["UnionLibre"] = "Union Libre";
    estadoCivil["Divorciado"] = "Divorciad@";
    estadoCivil["Viudo"] = "Viud@";
})(estadoCivil || (estadoCivil = {}));
class Paciente extends Orm_1.BaseModel {
}
Paciente.table = 'pacientes';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", String)
], Paciente.prototype, "numero_identificacion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "tipo_identificacion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], Paciente.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "genero", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "estado_civil", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id_eps", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "direccion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id_usuario", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Usuario_1.default, {
        foreignKey: 'id_usuario',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "usuario", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Eps_1.default, {
        foreignKey: 'id_eps',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "eps", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Cita_1.default, {
        foreignKey: 'id_paciente',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "citas", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Comentario_1.default, {
        foreignKey: 'id_paciente',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "comentarios", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Testimonio_1.default, {
        foreignKey: 'id_paciente',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "testimonios", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Paciente.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Paciente.prototype, "updatedAt", void 0);
exports.default = Paciente;
//# sourceMappingURL=Paciente.js.map