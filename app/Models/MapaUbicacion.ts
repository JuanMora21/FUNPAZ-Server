import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class MapaUbicacion extends BaseModel {
  public static table = 'mapas_ubicaciones';
  
  @column({ isPrimary: true })
  public id_mapa: number;

  @column({ isPrimary: true })
  public id_ubicacion: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
