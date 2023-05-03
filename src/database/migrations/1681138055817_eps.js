"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'eps';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('nombre').notNullable();
            table.enum('regimen', ["Contributivo", "Subsidiado"]).notNullable();
            table.enum('tipo_beneficiario', ["Cotizante", "Beneficiario"]).notNullable();
            table.enum('rango_salarial', ["Rango 1", "Rango 2", "Rango 3"]).notNullable();
            table.enum('estado', ["Activo", "Inactivo", "Retirado", "En espera", "Suspendido"]).notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1681138055817_eps.js.map