import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Permiso from './Permiso'

export default class Rol extends BaseModel {
  public static table = 'roles'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @hasMany(() => Permiso, {
    foreignKey: 'id_rol', //Nombre clave propagada de la entidad actual a la dominada
  })
  public permisos: HasMany<typeof Permiso>
}
