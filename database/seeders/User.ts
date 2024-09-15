import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Create users
    await User.createMany([
      {
        name: 'User 1',
        email: 'user1@example.com',
        password: 'password1',
      },
      {
        name: 'User 2',
        email: 'user2@example.com',
        password: 'password2',
      },
      {
        name: 'User 3',
        email: 'user3@example.com',
        password: 'password3',
      },
      {
        name: 'User 4',
        email: 'user4@example.com',
        password: 'password4',
      },
      {
        name: 'User 5',
        email: 'user5@example.com',
        password: 'password5',
      },
      {
        name: 'User 6',
        email: 'user6@example.com',
        password: 'password6',
      },
      {
        name: 'User 7',
        email: 'user7@example.com',
        password: 'password7',
      },
      {
        name: 'User 8',
        email: 'user8@example.com',
        password: 'password8',
      },
      {
        name: 'User 9',
        email: 'user9@example.com',
        password: 'password9',
      },
      {
        name: 'User 10',
        email: 'user10@example.com',
        password: 'password10',
      },
      {
        name: 'demo',
        email: 'demo@adonis.com',
        password: 'demo123',
      },
    ])
  }
}
