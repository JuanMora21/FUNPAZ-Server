import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Rol from './Rol';

export default class Permiso extends BaseModel {
  public static table = 'permisos';
  
  @column({ isPrimary: true })
  public id: number;

  @column()
  public url: string;

  @column()
  public metodo: string;

  @manyToMany(() => Rol, {
    pivotTable: 'roles_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_rol',
  })
  public roles: ManyToMany<typeof Rol>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
