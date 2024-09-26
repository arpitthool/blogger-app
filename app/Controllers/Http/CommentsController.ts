import Comment from "App/Models/Comment"
import User from "App/Models/User"

/**
 * CommentsController
 * 
 * This controller handles operations related to comments on blog posts.
 * It provides functionality for storing new comments.
 */
export default class CommentsController {

    /**
     * Store a new comment
     */
    public async store({params, request, auth, response}){
        // Get the authenticated user
        const authUser = auth.user

        // Extract blog ID from URL
        const blogId = params.blog_id

        // Extract comment content from the request
        const commentContent = request.input('content')

        // get user object using user id
        const user = User.findByOrFail('id', authUser?.id)

        // Create a new comment in the database
        await Comment.create({
            userId: (await user).id,
            blogId: blogId,
            content: commentContent,
            username: (await user).name,
        })

        // Redirect back to the previous page
        return response.redirect().back()
    }

    /**
     * Delete a comment
     */
    public async delete({params, auth, response}){
        // Get the authenticated user
        const user = auth.user

        // Extract comment ID from URL
        const commentId = params.id
        
        // Find the comment by ID
        const comment = await Comment.findOrFail(commentId)

        // Check if the comment exists and if the authenticated user is the owner
        if (comment && comment.userId === user?.id) {
            // Delete the comment
            await comment.delete()
        }

        // Redirect back to the previous page
        return response.redirect().back()
    }
}
