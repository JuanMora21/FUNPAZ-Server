import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Profesional from './Profesional';
import Servicio from './Servicio';
import Publicacion from './Publicacion';
import { DateTime } from 'luxon';

export default class Multimedia extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public tipo: string;

  @column()
  public url: string;

  @column()
  public descripcion: string;

  @manyToMany(() => Profesional, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_multimedia',
    pivotRelatedForeignKey: 'id_entidad',
  })
  public profesionales: ManyToMany<typeof Profesional>;

  @manyToMany(() => Servicio, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_multimedia',
    pivotRelatedForeignKey: 'id_entidad',
  })
  public servicios: ManyToMany<typeof Servicio>;

  @manyToMany(() => Publicacion, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_multimedia',
    pivotRelatedForeignKey: 'id_entidad',
  })
  public publicaciones: ManyToMany<typeof Publicacion>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
