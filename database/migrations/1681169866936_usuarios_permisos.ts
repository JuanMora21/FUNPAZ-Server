import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios_permisos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios').notNullable()
      table.integer('id_permiso').unsigned().references('id').inTable('permisos').notNullable()
      table.primary(['id_usuario', 'id_permiso'])
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
