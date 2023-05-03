import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import EpsInfo from './EpsInfo';

export default class EPS extends BaseModel {
  public static table = 'eps';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @hasMany(() => EpsInfo, {
    foreignKey: 'id_eps',
  })
  public epsInfos: HasMany<typeof EpsInfo>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
