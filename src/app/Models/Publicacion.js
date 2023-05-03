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
const Comentario_1 = __importDefault(require("./Comentario"));
const luxon_1 = require("luxon");
const Entidad_1 = __importDefault(require("./Entidad"));
var categoria;
(function (categoria) {
    categoria["Noticia"] = "Noticia";
    categoria["Tratamiento"] = "Tratamiento";
    categoria["Padecimiento"] = "Padecimiento";
})(categoria || (categoria = {}));
class Publicacion extends Orm_1.BaseModel {
}
Publicacion.table = 'publicaciones';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Publicacion.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Publicacion.prototype, "titulo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Publicacion.prototype, "autor", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], Publicacion.prototype, "fecha_publicacion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Publicacion.prototype, "categoria", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Publicacion.prototype, "contenido", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Publicacion.prototype, "etiquetas", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Publicacion.prototype, "id_entidad", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Entidad_1.default, {
        foreignKey: 'id_entidad',
    }),
    __metadata("design:type", Object)
], Publicacion.prototype, "entidad", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Comentario_1.default, {
        foreignKey: 'id_publicacion',
    }),
    __metadata("design:type", Object)
], Publicacion.prototype, "comentarios", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Publicacion.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Publicacion.prototype, "updatedAt", void 0);
exports.default = Publicacion;
//# sourceMappingURL=Publicacion.js.map