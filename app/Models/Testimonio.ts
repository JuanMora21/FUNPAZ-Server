import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';

export default class Testimonio extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public id_paciente: number;

  @column()
  public fecha_publicacion: Date;

  @column()
  public contenido: string;

  @belongsTo(() => Paciente,{foreignKey:'id_paciente'})
  public paciente: BelongsTo<typeof Paciente>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
