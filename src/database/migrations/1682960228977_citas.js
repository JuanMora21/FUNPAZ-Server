"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'citas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.date('fecha').notNullable();
            table.time('hora').notNullable();
            table.float('duracion').notNullable();
            table.string('motivo').notNullable();
            table.enum('estado', ['Pendiente', 'Confirmada', 'Cancelada', 'Reagendada', 'Completada']).notNullable();
            table.string('id_paciente').references('numero_identificacion').inTable('pacientes').notNullable();
            table.integer('id_profesional').unsigned().references('id').inTable('profesionales').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1682960228977_citas.js.map