"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'mapas_ubicaciones';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('id_mapa').unsigned().references('id').inTable('mapas').notNullable();
            table.integer('id_ubicacion').unsigned().references('id').inTable('ubicaciones').notNullable();
            table.primary(['id_mapa', 'id_ubicacion']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1682960240545_mapas_ubicaciones.js.map