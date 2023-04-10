import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';
import Publicacion from './Publicacion';

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public id_paciente: number;

  @column()
  public autor: string;

  @column()
  public fecha_publicacion: DateTime;

  @column()
  public contenido: string;

  @column()
  public id_publicacion: number;

  @belongsTo(() => Paciente,{foreignKey:'id_paciente'})
  public paciente: BelongsTo<typeof Paciente>;

  @belongsTo(() => Publicacion,{foreignKey:'id_publicacion'})
  public publicacion: BelongsTo<typeof Publicacion>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
