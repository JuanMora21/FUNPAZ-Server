import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'servicios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.string('especialidad').notNullable()
      table.string('descripcion').notNullable()
      table.integer('duracion').notNullable()
      table.float('tarifa_particular').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Relación muchos a muchos con Profesional a través de Profesionales_Servicios
      table.integer('id_profesional').unsigned().references('id').inTable('profesionales').onDelete('CASCADE')
      table.integer('id_servicio').unsigned().references('id').inTable('servicios').onDelete('CASCADE')

      // Relación muchos a muchos con Multimedia a través de Entidades_Multimedia
      table.integer('id_entidad').unsigned().references('id').inTable('servicios').onDelete('CASCADE')
      table.integer('id_multimedia').unsigned().references('id').inTable('multimedia').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
