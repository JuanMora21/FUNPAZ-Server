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
const Multimedia_1 = __importDefault(require("./Multimedia"));
var tipo;
(function (tipo) {
    tipo["Publicacion"] = "Publicacion";
    tipo["Servicio"] = "Servicio";
    tipo["Ubicacion"] = "Ubicacion";
    tipo["Profesional"] = "Profesional";
})(tipo || (tipo = {}));
class Entidad extends Orm_1.BaseModel {
}
Entidad.table = 'entidades';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Entidad.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Entidad.prototype, "tipo", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Multimedia_1.default, {
        pivotTable: 'entidades_multimedia',
        pivotForeignKey: 'id_entidad',
        pivotRelatedForeignKey: 'id_multimedia',
    }),
    __metadata("design:type", Object)
], Entidad.prototype, "multimedia", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Entidad.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Entidad.prototype, "updatedAt", void 0);
exports.default = Entidad;
//# sourceMappingURL=Entidad.js.map