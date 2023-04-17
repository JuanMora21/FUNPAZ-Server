import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'multimedia'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre')
      table.enum('tipo',["Imagen","Audio","Video","Animacion","Documento"]).notNullable()
      table.enum('formato',["JPEG","PNG","BMP","MP3","WAV","AAC","MP4","AVI","MKV","MOV","GIF","SWF","DOC","PDF","TXT"]).notNullable()
      table.string('url').notNullable()
      table.string('descripcion').notNullable()
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
