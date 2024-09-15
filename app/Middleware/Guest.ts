import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // if user is already logged in then redirect to home page
    if(auth.isLoggedIn) {
      response.redirect('/')
    }

    // else continue with the request
    await next()
  }
}
