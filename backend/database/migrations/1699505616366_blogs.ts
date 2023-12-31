import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'blogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() // we want this column to be the primary key
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE') // user id of blog author
      table.string('title').notNullable() // blog title
      table.string('content', 2000 ).notNullable() // blog content
      table.integer('total_likes').defaultTo(0) // no of likes
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
