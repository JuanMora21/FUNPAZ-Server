import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';
import Profesional from './Profesional';

enum estado {
  Pendiente = 'Pendiente',
  Confirmada = 'Confirmada',
  Cancelada = 'Cancelada',
  Reagendada = 'Reagendada',
  Completada = 'Completada',
}

export default class Cita extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fecha: Date;

  @column()
  public hora: DateTime;

  @column()
  public duracion: number;

  @column()
  public motivo: string;

  @column()
  public estado: estado;

  @column()
  public id_paciente: number;

  @column()
  public id_profesional: number;

  @belongsTo(() => Paciente,{foreignKey:'id_paciente'})
  public paciente: BelongsTo<typeof Paciente>;

  @belongsTo(() => Profesional,{foreignKey:'id_profesional'})
  public profesional: BelongsTo<typeof Profesional>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
