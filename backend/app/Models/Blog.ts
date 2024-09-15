import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Like from './Like'
import Comment from './Comment'

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

  // RELATIONSHIPS
  // Blog can have only one author
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // One-to-many : Blog can have many likes
  @hasMany(() => Like)
  public likes: HasMany<typeof Like>

  // One-to-many : Blog can have many comments
  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>
}
