import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Profesional from './Profesional';
import Multimedia from './Multimedia';

export default class Servicio extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public especialidad: string;

  @column()
  public descripcion: string;

  @column()
  public duracion: number;

  @column()
  public tarifa_particular: number;

  @hasMany(() => Cita, {
    foreignKey: 'id_servicio',
  })
  public citas: HasMany<typeof Cita>;

  @manyToMany(() => Profesional, {
    pivotTable: 'profesionales_servicios',
    pivotForeignKey: 'id_profesional',
    pivotRelatedForeignKey: 'id_servicio',
  })
  public profesionales: ManyToMany<typeof Profesional>;

  @manyToMany(() => Multimedia, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_entidad',
    pivotRelatedForeignKey: 'id_multimedia',
  })
  public multimedia: ManyToMany<typeof Multimedia>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
