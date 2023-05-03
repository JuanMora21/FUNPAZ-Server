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
const Mapa_1 = __importDefault(require("./Mapa"));
const luxon_1 = require("luxon");
const Entidad_1 = __importDefault(require("./Entidad"));
class Ubicacion extends Orm_1.BaseModel {
}
Ubicacion.table = 'ubicaciones';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Ubicacion.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Ubicacion.prototype, "latitud", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Ubicacion.prototype, "longitud", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Ubicacion.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Ubicacion.prototype, "id_entidad", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Entidad_1.default, {
        foreignKey: 'id_entidad',
    }),
    __metadata("design:type", Object)
], Ubicacion.prototype, "entidad", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Mapa_1.default, {
        pivotTable: 'mapas_ubicaciones',
        pivotForeignKey: 'id_ubicacion',
        pivotRelatedForeignKey: 'id_mapa',
    }),
    __metadata("design:type", Object)
], Ubicacion.prototype, "mapas", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Ubicacion.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Ubicacion.prototype, "updatedAt", void 0);
exports.default = Ubicacion;
//# sourceMappingURL=Ubicacion.js.map