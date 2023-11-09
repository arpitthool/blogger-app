import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BlogsController {
    /**
     * index method to fetch blogs
    */
    public index({view} : HttpContextContract) {
        return view.render('blogs/index')
    }

    /**
     * store : method to vlaidate Blog data and store Blog into database OR show appropriate errors
     */
    public async store({request, response} : HttpContextContract) {

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
                'content.maxLength'   : `Blog content cannot exceed ${ blogContentMaxLength } characters`,
            },
        })

        // Create Blog
        // use validated data instead of fetching data directly from request like : request.input('title')
        await Blog.create({
            title   : validatedData.title,
            content : validatedData.content
        })

        // redirect to the previous page
        return response.redirect('back')
    }
}
