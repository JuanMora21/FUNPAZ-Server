import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pacientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('numero_identificacion').notNullable().unique().primary()
      table.enum('tipo_identificacion',['T.I','C.C','C.E','Pasaporte']).notNullable()
      table.string('nombre').notNullable()
      table.date('fecha_nacimiento').notNullable()
      table.enum('genero',['Masculino','Femenino','Otro']).notNullable()
      table.enum('estado_civil',['Solter@','Casad@','Union Libre','Divorciad@','Viud@']).notNullable()
      table.integer('id_eps').unsigned().references('id').inTable('eps').notNullable()
      table.string('direccion').notNullable()
      table.string('telefono').notNullable()
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios').notNullable()
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
