import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'citas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('fecha').notNullable()
      table.time('hora').notNullable()
      table.float('duracion').notNullable()
      table.string('motivo').notNullable()
      table.enum('estado',['Pendiente','Confirmada','Cancelada','Reagendada','Completada']).notNullable()
      table.string('id_paciente').references('numero_identificacion').inTable('pacientes').notNullable()
      table.integer('id_profesional').unsigned().references('id').inTable('profesionales').notNullable()
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
