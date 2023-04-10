import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Mapa from './Mapa';
import { DateTime } from 'luxon';

export default class Ubicacion extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public latitud: number;

  @column()
  public longitud: number;

  @column()
  public nombre: string;

  @manyToMany(() => Mapa, {
    pivotTable: 'mapas_ubicaciones',
    pivotForeignKey: 'id_ubicacion',
    pivotRelatedForeignKey: 'id_mapa',
  })
  public mapas: ManyToMany<typeof Mapa>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
