import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'entidades_multimedia'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_entidad').unsigned().references('id').inTable('entidades').notNullable()
      table.integer('id_multimedia').unsigned().references('id').inTable('multimedia').notNullable()
      table.primary(['id_entidad', 'id_multimedia'])
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
