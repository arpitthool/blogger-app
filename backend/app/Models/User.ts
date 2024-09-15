import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Blog from './Blog'
import Like from './Like'
import Comment from './Comment'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  // RELATIONSHIPS
  // one-to-many -> one user has many blogs
  // the inverse of this relationship should be defined in Blog
  @hasMany(() => Blog)
  public blogs : HasMany<typeof Blog>

  // One-to-many -> one user has many likes
  @hasMany(() => Like)
  public likes : HasMany<typeof Like>

  // One-to-many -> one user has many Comments
  @hasMany(() => Comment)
  public comments : HasMany<typeof Comment>
}
