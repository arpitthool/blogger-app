import Comment from "App/Models/Comment"

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
        const user = auth.user

        // Extract blog ID from URL
        const blogId = params.blog_id

        // Extract comment content from the request
        const commentContent = request.input('content')

        // Create a new comment in the database
        await Comment.create({
            userId: user?.id,
            blogId: blogId,
            content: commentContent,
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
