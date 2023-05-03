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
const Permiso_1 = __importDefault(require("./Permiso"));
const Rol_1 = __importDefault(require("./Rol"));
const ApiToken_1 = __importDefault(require("./ApiToken"));
class Usuario extends Orm_1.BaseModel {
}
Usuario.table = 'usuarios';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Usuario.prototype, "correo_electronico", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_rol", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Permiso_1.default, {
        pivotTable: 'usuarios_permisos',
        pivotForeignKey: 'id_usuario',
        pivotRelatedForeignKey: 'id_permiso',
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "permisos", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Rol_1.default, {
        foreignKey: 'id_rol',
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => ApiToken_1.default, {
        foreignKey: 'id_usuario',
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "tokens", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Usuario.prototype, "updatedAt", void 0);
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map