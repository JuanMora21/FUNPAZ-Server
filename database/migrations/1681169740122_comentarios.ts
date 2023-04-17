import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comentarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('autor').notNullable()
      table.date('fecha_publicacion').notNullable()
      table.string('contenido').notNullable()
      table.string('id_paciente').references('numero_identificacion').inTable('pacientes').notNullable()
      table.integer('id_publicacion').unsigned().references('id').inTable('publicaciones').notNullable()
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
