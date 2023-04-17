import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'profesionales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.enum('especialidad',["Psiquiatria","Psicologia"]).notNullable()
      table.string('horario').notNullable()
      table.string('telefono').notNullable()
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios').notNullable()
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
