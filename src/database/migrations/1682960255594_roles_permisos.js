"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'roles_permisos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('id_rol').unsigned().references('id').inTable('roles').notNullable();
            table.integer('id_permiso').unsigned().references('id').inTable('permisos').notNullable();
            table.primary(['id_rol', 'id_permiso']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1682960255594_roles_permisos.js.map