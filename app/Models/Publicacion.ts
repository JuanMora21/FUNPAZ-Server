import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import Comentario from './Comentario';
import { DateTime } from 'luxon';
import Entidad from './Entidad';

enum categoria {
  Noticia = 'Noticia',
  Tratamiento = 'Tratamiento',
  Padecimiento = 'Padecimiento',
}

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
  public categoria: categoria;

  @column()
  public contenido: string;

  @column()
  public etiquetas: string;

  @column()
  public id_entidad: number;

  @hasOne(() => Entidad,{
    foreignKey: 'id_entidad',
  })
  public entidad: HasOne<typeof Entidad>;

  @hasMany(() => Comentario, {
    foreignKey: 'id_publicacion',
  })
  public comentarios: HasMany<typeof Comentario>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
