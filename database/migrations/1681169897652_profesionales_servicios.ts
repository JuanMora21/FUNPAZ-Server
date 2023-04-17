import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'profesionales_servicios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_profesional').unsigned().references('id').inTable('profesionales').notNullable()
      table.integer('id_servicio').unsigned().references('id').inTable('servicios').notNullable()
      table.primary(['id_profesional', 'id_servicio'])
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
