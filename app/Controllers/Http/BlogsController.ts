import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BlogsController {
    /**
     * index method to fetch blogs
    */
    public async index({view} : HttpContextContract) {
        // fecth all blogs
        const blogs = await Blog.all()

        // pass blogs to view
        return view.render('blogs/index', { blogs })
    }

    /**
     * store : method to vlaidate Blog data and store Blog into database OR show appropriate errors
     * 
     * NOTE : if we are performing an async operation in method then we add async to method definition
     */
    public async store({request, response, session} : HttpContextContract) {

        // max character length for blog title
        const blogTitleMaxLength = 255

        // max character length for blog content
        const blogContentMaxLength = 2000

        // create validation schema
        // title : only accept string, trim string of any leading whitespace, set max-length
        // content : only accept string within max-length
        const validationSchema = schema.create({
            title : schema.string({ trim : true }, [
                rules.maxLength(blogTitleMaxLength)
            ]),
            content : schema.string({}, [
                rules.maxLength(blogContentMaxLength)
            ])
        })

        // validate coming data with validation schema and define appropriate messages if error occurs
        const validatedData = await request.validate({
            schema : validationSchema,
            messages : {
                'title.required'    : 'Please enter blog title',
                'title.maxLength'   : `Blog title cannot exceed ${ blogTitleMaxLength } characters`,
                'content.required'  : 'Please enter blog content',
                'content.maxLength' : `Blog content cannot exceed ${ blogContentMaxLength } characters`,
            },
        })

        // Create Blog
        // use validated data instead of fetching data directly from request like : request.input('title')
        await Blog.create({
            title   : validatedData.title,
            content : validatedData.content
        })

        // send notification to user that Blog was stored
        // format for flash method : flash( 'notification', 'my notification text' )
        // view can access the notiification using 'flashMessages' object
        session.flash('notification', 'Blog added!')

        // redirect to the previous page
        return response.redirect('back')
    }
    
    /**
     * deleteBlog : method to delete blog object based on id parameter
     */
    public async deleteBlog({params, response, session} : HttpContextContract ) {

        // fecth blog object using id from params
        const blog = await Blog.findOrFail(params.id)

        // delete blog
        await blog.delete()

        // send deleteion successful notification
        session.flash('notification', 'Blog deleted!')

        // redirect to previous view
        return response.redirect('back')
    }
}
