import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany, HasOne, hasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Profesional from './Profesional';
import Entidad from './Entidad';

enum especialidad {
  Psiquiatria = "Psiquiatria",
  Psicologia = "Psicologia",
  InternacionGeneral = "Internacion General",
  InternacionEspecial = "Internacion Especial"
}

export default class Servicio extends BaseModel {
  public static table = 'servicios';
  
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public especialidad: especialidad;

  @column()
  public descripcion: string;

  @column()
  public duracion: number;

  @column()
  public tarifa_particular: number;

  @column()
  public id_entidad: number;

  @hasOne(() => Entidad,{
    foreignKey: 'id_entidad',
  })
  public entidad: HasOne<typeof Entidad>;

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
