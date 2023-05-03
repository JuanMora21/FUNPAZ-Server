"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pacientes';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.string('numero_identificacion').notNullable().unique().primary();
            table.enum('tipo_identificacion', ['T.I', 'C.C', 'C.E', 'Pasaporte']).notNullable();
            table.string('nombre').notNullable();
            table.date('fecha_nacimiento').notNullable();
            table.enum('genero', ['Masculino', 'Femenino', 'Otro']).notNullable();
            table.enum('estado_civil', ['Solter@', 'Casad@', 'Union Libre', 'Divorciad@', 'Viud@']).notNullable();
            table.integer('id_eps').unsigned().references('id').inTable('eps').notNullable();
            table.string('direccion').notNullable();
            table.string('telefono').notNullable();
            table.integer('id_usuario').unsigned().references('id').inTable('usuarios').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1682960197256_pacientes.js.map