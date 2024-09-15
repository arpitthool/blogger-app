import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Blog from './Blog'
import User from './User'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public blogId: number

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // RELATIONSHIPS
  // A comment can only have one blog
  @belongsTo(() => Blog)
  public blog: BelongsTo<typeof Blog>

  // A comment can only have one user
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
