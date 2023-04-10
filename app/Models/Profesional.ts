import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Servicio from './Servicio';
import Multimedia from './Multimedia';
import Permiso from './Permiso';
import { DateTime } from 'luxon';

export default class Profesional extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public especialidad: string;

  @column()
  public horario: string;

  @column()
  public telefono: string;

  @column()
  public correo_electronico: string;

  @hasMany(() => Cita, {
    foreignKey: 'id_profesional',
  })
  public citas: HasMany<typeof Cita>;

  @manyToMany(() => Servicio, {
    pivotTable: 'profesionales_servicios',
    pivotForeignKey: 'id_profesional',
    pivotRelatedForeignKey: 'id_servicio',
  })
  public servicios: ManyToMany<typeof Servicio>;

  @manyToMany(() => Multimedia, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_entidad',
    pivotRelatedForeignKey: 'id_multimedia',
  })
  public multimedia: ManyToMany<typeof Multimedia>;

  @manyToMany(() => Permiso, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_usuario',
    pivotRelatedForeignKey: 'id_permiso',
  })
  public permisos: ManyToMany<typeof Permiso>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
