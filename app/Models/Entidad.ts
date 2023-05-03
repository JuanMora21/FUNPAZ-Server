import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Multimedia from './Multimedia';

enum tipo {
  Publicacion = 'Publicacion',
  Servicio = 'Servicio',
  Ubicacion = 'Ubicacion',
  Profesional = 'Profesional',
}

export default class Entidad extends BaseModel {
  public static table = 'entidades';

  @column({ isPrimary: true })
  public id: number

  @column()
  public tipo:tipo;

  @manyToMany(() => Multimedia, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_entidad',
    pivotRelatedForeignKey: 'id_multimedia',
  })
  public multimedia: ManyToMany<typeof Multimedia>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
