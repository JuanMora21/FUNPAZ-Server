import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Permiso from './Permiso';

enum tipo {
  Administrador = 'Administrador',
  GestorContenido = 'Gestor Contenido',
  Profesional = 'Profesional',
  Paciente = 'Paciente',
}

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public correo_electronico: string;

  @column()
  public contrasena: string;

  @column()
  public tipo: tipo;

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
