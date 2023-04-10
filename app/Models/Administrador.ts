import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Permiso from './Permiso';
import { DateTime } from 'luxon';

export default class Administrador extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public correo_electronico: string;

  @column()
  public telefono: string;

  @column()
  public usuario: string;

  @column()
  public contrasena: string;

  @manyToMany(() => Permiso, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_usuario',
    pivotRelatedForeignKey: 'id_permiso',
  })
  public permisos: ManyToMany<typeof Permiso>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
