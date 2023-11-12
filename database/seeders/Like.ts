import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Like from 'App/Models/Like'

export default class extends BaseSeeder {
  public async run () {
    // Liked seeder
    for( let user = 1; user<11; user++){
      for( let blog = 1; blog<11; blog++){
        await Like.create({
          userId : user,
          blogId : blog,
        })
      }
    }
  }
}
