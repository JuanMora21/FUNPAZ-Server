import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Ubicacion from './Ubicacion';
import { DateTime } from 'luxon';

export default class Mapa extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @manyToMany(() => Ubicacion, {
    pivotTable: 'mapas_ubicaciones',
    pivotForeignKey: 'id_mapa',
    pivotRelatedForeignKey: 'id_ubicacion',
  })
  public ubicaciones: ManyToMany<typeof Ubicacion>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
