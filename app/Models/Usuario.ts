import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, ManyToMany, column, hasMany, hasOne, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Permiso from './Permiso';
import Rol from './Rol';
import ApiToken from './ApiToken';

export default class Usuario extends BaseModel {
  public static table = 'usuarios';
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public correo_electronico: string;

  @column()
  public contrasena: string;

  @column()
  public id_rol: number;

  @manyToMany(() => Permiso, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_usuario',
    pivotRelatedForeignKey: 'id_permiso',
  })
  public permisos: ManyToMany<typeof Permiso>;

  @hasOne(()=>Rol,{
    foreignKey: 'id',
    localKey: 'id_rol',
  })
  public rol: HasOne<typeof Rol>;

  @hasMany(() => ApiToken,{
    foreignKey: 'id_usuario',
    })
  public tokens: HasMany<typeof ApiToken>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
