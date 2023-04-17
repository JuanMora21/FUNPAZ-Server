import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Entidad from './Entidad';

enum tipo {
  Imagen = "Imagen",
  Audio = "Audio",
  Video = "Video",
  Animacion = "Animacion",
  Documento = "Documento"
}

enum formato {
  JPEG = "JPEG",
  PNG = "PNG",
  BMP = "BMP",
  MP3 = "MP3",
  WAV = "WAV",
  AAC = "AAC",
  MP4 = "MP4",
  AVI = "AVI",
  MKV = "MKV",
  MOV = "MOV",
  GIF = "GIF",
  SWF = "SWF",
  DOC = "DOC",
  PDF = "PDF",
  TXT = "TXT"
}

export default class Multimedia extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column()
  public tipo: tipo;

  @column()
  public formato: formato;

  @column()
  public url: string;

  @column()
  public descripcion: string;

  @manyToMany(() => Entidad, {
    pivotTable: 'entidades_multimedia',
    pivotForeignKey: 'id_multimedia',
    pivotRelatedForeignKey: 'id_entidad',
  })
  public servicios: ManyToMany<typeof Entidad>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
