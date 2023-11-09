import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'

export default class BlogsController {
    /**
     * index method to fetch blogs
    */
    public index({view} : HttpContextContract) {
        return view.render('blogs/index')
    }

    /**
     * store
     */
    public async store({request, response} : HttpContextContract) {
        await Blog.create({
            title   : request.input('title'),
            content : request.input('content')
        })

        return response.redirect('back')
    }
}
