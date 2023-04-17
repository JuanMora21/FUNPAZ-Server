import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'publicaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.date('fecha_publicacion').notNullable()
      table.enum('categoria',["Noticia","Tratamiento","Padecimiento"]).notNullable()
      table.string('contenido').notNullable()
      table.string('etiquetas').notNullable()
      table.integer('id_entidad').unsigned().references('id').inTable('entidades').notNullable()
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
