import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Usuario from './Usuario';

export default class Permiso extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public url: string;

  @column()
  public metodo: string;

  @manyToMany(() => Usuario, {
    pivotTable: 'usuarios_permisos',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_usuario',
  })
  public Usuarios: ManyToMany<typeof Usuario>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
