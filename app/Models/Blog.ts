import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Like from './Like'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public totalLikes: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // RELATIONSHIP : Blog can have only one author
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // RELATIONSHIP : one-to-many : Blog can have many likes
  @hasMany(() => Like)
  public likes: HasMany<typeof Like>
}
