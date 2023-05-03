import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles_permisos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_rol').unsigned().references('id').inTable('roles').notNullable()
      table.integer('id_permiso').unsigned().references('id').inTable('permisos').notNullable()
      table.primary(['id_rol', 'id_permiso'])
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
