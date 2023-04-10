import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import Cita from './Cita';
import Comentario from './Comentario';
import Testimonio from './Testimonio';
import Permiso from './Permiso';
import EPS from './Eps';
import { DateTime } from 'luxon';

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  public numero_identificacion: string;

  @column()
  public tipo_identificacion: string;

  @column()
  public nombre: string;

  @column()
  public fecha_nacimiento: Date;

  @column()
  public genero: string;

  @column()
  public estado_civil: string;

  @column()
  public id_EPS: number;

  @column()
  public direccion: string;

  @column()
  public telefono: string;

  @column()
  public correo_electronico: string;

  @column()
  public historial_medico: string;

  @hasOne(() => EPS, {
    foreignKey: 'id_EPS',
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

  @manyToMany(() => Permiso, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_usuario',
    pivotRelatedForeignKey: 'id_permiso',
  })
  public permisos: ManyToMany<typeof Permiso>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
    static citas: any;
}
