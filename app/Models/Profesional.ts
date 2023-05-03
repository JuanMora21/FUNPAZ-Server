import { BaseModel, column, hasMany, HasMany, HasOne, hasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Servicio from './Servicio';
import { DateTime } from 'luxon';
import Usuario from './Usuario';
import Entidad from './Entidad';

enum especialidad {
  Psiquiatria = "Psiquiatria",
  Psicologia = "Psicologia",
}

export default class Profesional extends BaseModel {
  public static table = 'profesionales';
  
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public especialidad: especialidad;

  @column()
  public horario: string;

  @column()
  public telefono: string;

  @column()
  public id_usuario: number;

  @column()
  public id_entidad: number;

  @hasOne(() => Entidad,{
    foreignKey: 'id_entidad',
  })
  public entidad: HasOne<typeof Entidad>;

  @hasOne(() => Usuario,{
    foreignKey: 'id_usuario',
  })
  public usuario: HasOne<typeof Usuario>;

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
