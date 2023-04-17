import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Usuario from './Usuario';

export default class GestorContenido extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public telefono: string;

  @column()
  public id_usuario: number;

  @hasOne(() => Usuario,{
    foreignKey: 'id_usuario',
  })
  public usuario: HasOne<typeof Usuario>;
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
