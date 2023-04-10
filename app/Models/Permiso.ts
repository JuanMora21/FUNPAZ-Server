import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Administrador from './Administrador';
import GestorContenido from './GestorContenido';
import Paciente from './Paciente';
import Profesional from './Profesional';
import { DateTime } from 'luxon';

export default class Permiso extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public url: string;

  @column()
  public metodo: string;

  @manyToMany(() => Administrador, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_usuario',
  })
  public administradores: ManyToMany<typeof Administrador>;

  @manyToMany(() => GestorContenido, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_usuario',
  })
  public gestoresContenido: ManyToMany<typeof GestorContenido>;

  @manyToMany(() => Paciente, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_usuario',
  })
  public pacientes: ManyToMany<typeof Paciente>;

  @manyToMany(() => Profesional, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_usuario',
  })
  public profesionales: ManyToMany<typeof Profesional>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
