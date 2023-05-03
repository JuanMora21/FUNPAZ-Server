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
const Publicacion_1 = __importDefault(require("./Publicacion"));
class Comentario extends Orm_1.BaseModel {
}
Comentario.table = 'comentarios';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Comentario.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Comentario.prototype, "id_paciente", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Comentario.prototype, "autor", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", luxon_1.DateTime)
], Comentario.prototype, "fecha_publicacion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Comentario.prototype, "contenido", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Comentario.prototype, "id_publicacion", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Paciente_1.default, { foreignKey: 'id_paciente' }),
    __metadata("design:type", Object)
], Comentario.prototype, "paciente", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Publicacion_1.default, { foreignKey: 'id_publicacion' }),
    __metadata("design:type", Object)
], Comentario.prototype, "publicacion", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Comentario.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Comentario.prototype, "updatedAt", void 0);
exports.default = Comentario;
//# sourceMappingURL=Comentario.js.map