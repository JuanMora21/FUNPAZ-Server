import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'eps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.enum('regimen',["Contributivo","Subsidiado"]).notNullable()
      table.enum('tipo_beneficiario',["Cotizante","Beneficiario"]).notNullable()
      table.enum('rango_salarial',["Rango 1","Rango 2","Rango 3"]).notNullable()
      table.enum('estado',["Activo","Inactivo","Retirado","En espera","Suspendido"]).notNullable()
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
