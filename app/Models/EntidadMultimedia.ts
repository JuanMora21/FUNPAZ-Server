import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class EntidadMultimedia extends BaseModel {
  public static table = 'entidades_multimedias';

  @column({ isPrimary: true })
  public id_entidad: number;

  @column({ isPrimary: true })
  public id_multimedia: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
