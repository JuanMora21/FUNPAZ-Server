import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class ProfesionalServicio extends BaseModel {
  public static table = 'profesionales_servicios';
  
  @column({ isPrimary: true })
  public id_profesional: number;

  @column({ isPrimary: true })
  public id_servicio: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}