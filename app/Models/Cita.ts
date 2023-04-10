import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';
import Profesional from './Profesional';

export default class Cita extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fecha: DateTime;

  @column()
  public hora: string;

  @column()
  public duracion: number;

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
