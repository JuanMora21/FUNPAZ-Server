"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'multimedia';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('nombre');
            table.enum('tipo', ["Imagen", "Audio", "Video", "Animacion", "Documento"]).notNullable();
            table.enum('formato', ["JPEG", "PNG", "BMP", "MP3", "WAV", "AAC", "MP4", "AVI", "MKV", "MOV", "GIF", "SWF", "DOC", "PDF", "TXT"]).notNullable();
            table.string('url').notNullable();
            table.string('descripcion').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1681137774738_multimedia.js.map