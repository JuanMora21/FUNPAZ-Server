import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Comentario from './Comentario';
import Testimonio from './Testimonio';
import EPS from './Eps';
import { DateTime } from 'luxon';
import Usuario from './Usuario';

enum tipoIdentificacion {
  CC = 'C.C',
  TI = 'T.I',
  CE = 'C.E',
  Pasaporte = 'Pasaporte'
}

enum genero {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Otro = 'Otro'
}

enum estadoCivil {
  Soltero = 'Solter@',
  Casado = 'Casad@',
  UnionLibre = 'Union Libre',
  Divorciado = 'Divorciad@',
  Viudo = 'Viud@'
}

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  public numero_identificacion: string;

  @column()
  public tipo_identificacion: tipoIdentificacion;

  @column()
  public nombre: string;

  @column()
  public fecha_nacimiento: Date;

  @column()
  public genero: genero;

  @column()
  public estado_civil: estadoCivil;

  @column()
  public id_eps: number;

  @column()
  public direccion: string;

  @column()
  public telefono: string;

  @column()
  public id_usuario: number;

  @hasOne(() => Usuario,{
    foreignKey: 'id_usuario',
  })
  public usuario: HasOne<typeof Usuario>;

  @hasOne(() => EPS, {
    foreignKey: 'id_eps',
  })
  public eps: HasOne<typeof EPS>;

  @hasMany(() => Cita, {
    foreignKey: 'id_paciente',
  })
  public citas: HasMany<typeof Cita>;

  @hasMany(() => Comentario, {
    foreignKey: 'id_paciente',
  })
  public comentarios: HasMany<typeof Comentario>;

  @hasMany(() => Testimonio, {
    foreignKey: 'id_paciente',
  })
  public testimonios: HasMany<typeof Testimonio>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
    static citas: any;
}
