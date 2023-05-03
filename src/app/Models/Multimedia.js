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
const luxon_1 = require("luxon");
const Entidad_1 = __importDefault(require("./Entidad"));
var tipo;
(function (tipo) {
    tipo["Imagen"] = "Imagen";
    tipo["Audio"] = "Audio";
    tipo["Video"] = "Video";
    tipo["Animacion"] = "Animacion";
    tipo["Documento"] = "Documento";
})(tipo || (tipo = {}));
var formato;
(function (formato) {
    formato["JPEG"] = "JPEG";
    formato["PNG"] = "PNG";
    formato["BMP"] = "BMP";
    formato["MP3"] = "MP3";
    formato["WAV"] = "WAV";
    formato["AAC"] = "AAC";
    formato["MP4"] = "MP4";
    formato["AVI"] = "AVI";
    formato["MKV"] = "MKV";
    formato["MOV"] = "MOV";
    formato["GIF"] = "GIF";
    formato["SWF"] = "SWF";
    formato["DOC"] = "DOC";
    formato["PDF"] = "PDF";
    formato["TXT"] = "TXT";
})(formato || (formato = {}));
class Multimedia extends Orm_1.BaseModel {
}
Multimedia.table = 'multimedia';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Multimedia.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Multimedia.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Multimedia.prototype, "tipo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Multimedia.prototype, "formato", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Multimedia.prototype, "url", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Multimedia.prototype, "descripcion", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Entidad_1.default, {
        pivotTable: 'entidades_multimedia',
        pivotForeignKey: 'id_multimedia',
        pivotRelatedForeignKey: 'id_entidad',
    }),
    __metadata("design:type", Object)
], Multimedia.prototype, "servicios", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Multimedia.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Multimedia.prototype, "updatedAt", void 0);
exports.default = Multimedia;
//# sourceMappingURL=Multimedia.js.map