import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Comentario from './Comentario';
import Multimedia from './Multimedia';
import { DateTime } from 'luxon';

export default class Publicacion extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public titulo: string;

  @column()
  public autor: string;

  @column()
  public fecha_publicacion: Date;

  @column()
  public categoria: string;

  @column()
  public contenido: string;

  @column()
  public etiquetas: string;

  @hasMany(() => Comentario, {
    foreignKey: 'id_publicacion',
  })
  public comentarios: HasMany<typeof Comentario>;

  @manyToMany(() => Multimedia, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_entidad',
    pivotRelatedForeignKey: 'id_multimedia',
  })
  public multimedia: ManyToMany<typeof Multimedia>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
