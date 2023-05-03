import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import Paciente from './Paciente';
import { DateTime } from 'luxon';
import Eps from 'App/Models/Eps';

enum regimen {
  Contributivo = 'Contributivo',
  Subsidiado = 'Subsidiado',
}

enum tipoBeneficiario {
  Cotizante ='Cotizante',
  Beneficiario = 'Beneficiario',
}

enum rangoSalarial {
  Rango1 = 'Rango 1',
  Rango2 = 'Rango 2',
  Rango3 = 'Rango 3',
}

enum estado {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
  Retirado = 'Retirado',
  EnEspera = 'En espera',
  Suspendido = 'Suspendido',
}

export default class EpsInfo extends BaseModel {
  public static table = 'eps_info';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public id_eps: number;

  @column()
  public regimen: regimen;

  @column()
  public tipo_beneficiario: tipoBeneficiario;

  @column()
  public rango_salarial: rangoSalarial;

  @column()
  public estado: estado;

  @hasMany(() => Paciente, {
    foreignKey: 'id_eps',
  })
  public pacientes: HasMany<typeof Paciente>;

  @hasOne(() => Eps, {
    foreignKey: 'id_eps',
  })
  public eps: HasOne<typeof Eps>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
