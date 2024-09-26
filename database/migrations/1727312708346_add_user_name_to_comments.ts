import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('username').nullable().defaultTo('User')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('username')
    })
  }
}
