// rolPermiso.ts
import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class RolPermiso extends BaseModel {
  public static table = 'roles_permisos';
  
  @column({ isPrimary: true })
  public id_rol: number;

  @column({ isPrimary: true })
  public id_permiso: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
