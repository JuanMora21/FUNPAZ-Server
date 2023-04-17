import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mapas_ubicaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_mapa').unsigned().references('id').inTable('mapas').notNullable()
      table.integer('id_ubicacion').unsigned().references('id').inTable('ubicaciones').notNullable()
      table.primary(['id_mapa', 'id_ubicacion'])
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
