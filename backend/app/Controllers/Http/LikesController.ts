import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'
import Like from 'App/Models/Like'

export default class LikesController {
    /**
     * like : method to like a blog by logged-in-user
     */
    public async like({response, auth, params} : HttpContextContract) {

        // get like object by passing user id and blog id
        const like = await this.getLikeGivenUserAndBlog(auth.user?.id, params.id)
        
        // check if like is not null
        if(!like) {

            // create Like object for the given user id and blog id
            await Like.create({
                userId : auth.user?.id,
                blogId : params.id,
            })

            // get blog object
            const blog = await Blog.findOrFail(params.id)

            // increment likes value in Blog object
            blog.totalLikes += 1

            // save blog to database
            await blog.save()

        } else {

            // redirect to previous page
            return response.redirect('back')
        }

        // redirect to previous page
        return response.redirect('back')
    }

    /**
     * dislike : method to dislike a blog by logged-in-user
     */
    public async dislike({response, auth, params} : HttpContextContract) {

        // get like object by passing user id and blog id
        const like = await this.getLikeGivenUserAndBlog(auth.user?.id, params.id)
        
        // check if like is not null
        if(!like) {

            // redirect to previous page
            return response.redirect('back')
        } else {

            // get blog object
            const blog = await Blog.findOrFail(params.id)

            // decrement likes value in Blog object
            if(blog.totalLikes > 0){
                blog.totalLikes -= 1
            }

            // save blog to database
            await blog.save()

            // delete Like object
            await like.delete()
        }

        // redirect to previous page
        return response.redirect('back')
    }

    /**
     * 
     * @param userId 
     * @param blogId 
     * @returns Like object that matches userId and blogId. If not found then returns null
     */
    public async getLikeGivenUserAndBlog(userId : number | undefined, blogId: number) {
        // if userId is undefined return null
        if(!userId) {
            return null
        }
    
        // check if there already exists a Like entry with user-id and blog-id
        const like = await Like.query()
            .where('user_id', userId)
            .where('blog_id', blogId)
            .first()
    
        // return like object
        return like
    }
}



