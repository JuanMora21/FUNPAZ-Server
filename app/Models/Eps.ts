import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';
import { DateTime } from 'luxon';

export default class EPS extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public regimen: string;

  @column()
  public tipo_beneficiario: string;

  @column()
  public rango_salarial: string;

  @column()
  public estado: string;

  @hasMany(() => Paciente, {
    foreignKey: 'id_EPS',
  })
  public pacientes: HasMany<typeof Paciente>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
