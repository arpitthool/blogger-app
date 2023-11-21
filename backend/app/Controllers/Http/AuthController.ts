import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {rules, schema} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
    /**
     * showRegister : method to render user registeration page
    */
    public showRegister({view} : HttpContextContract) {

        // return regsiter page
        return view.render('auth/register')
    }

    /**
     * register : method to create new user details if the data validation is successful
    */
    public async register({request, auth, response} : HttpContextContract) {

        // validation schema for user data
        const validationSchema = schema.create({

            // validate name
            name : schema.string({trim : true}),

            // validate that email is a proper email, satisfies the length, and is unique
            email : schema.string({trim : true}, [
                rules.email(),
                rules.maxLength(255),
                rules.unique({ table: 'users' , column : 'email'})
            ]),

            // confirm password is same as confirm password
            password : schema.string({trim : true}, [
                rules.confirmed(),
            ])
        })

        // validate request data with above validation schema and get validated data
        const validatedData = await request.validate({
            schema : validationSchema,
        })

        // create user
        const user = await User.create(validatedData)

        // once user is created we log the user in
        await auth.login(user)

        // return view
        return response.redirect('/')
    }

    /**
     * showLogin : method to render user login page
    */
    public showLogin({view} : HttpContextContract) {

        // return login page
        return view.render('auth/login')
    }

    /**
     * login : method to handle user login
     */
    public async login({auth, request, response, session} : HttpContextContract) {
        
        // extract email and password
        const {email, password} = request.all()

        try {
            // using email and password try to attempt to login the user
            await auth.attempt(email, password)
            
            // redirect user to home page when log in is successful
            response.redirect('/')

        } catch (error) {
            // in case of failure we need to notify user
            session.flash('notification', 'We could not verify your credentials')
            
            // redirect to previous page
            response.redirect('back')
        }
    }

    /**
     * logout : method to handle user logout
    */
    public async logout({response, auth} : HttpContextContract) {
        // logout user
        await auth.logout()

        // redirect to home page
        return response.redirect('/')
    }

    /**
     * $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
     * 
     *        METHODS FOR API ROUTES
     * 
     * $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
     */

    /**
     * apiRegister : method to create new user details if the data validation is successful
     */
    public async apiRegister({request, auth, response} : HttpContextContract) {

        // validation schema for user data
        const validationSchema = schema.create({

            // validate name
            name : schema.string({trim : true}),

            // validate that email is a proper email, satisfies the length, and is unique
            email : schema.string({trim : true}, [
                rules.email(),
                rules.maxLength(255),
                rules.unique({ table: 'users' , column : 'email'})
            ]),

            // confirm password is same as confirm password
            password : schema.string({trim : true}, [
                rules.confirmed(),
            ])
        })

        // validate request data with above validation schema and get validated data
        const validatedData = await request.validate({
            schema : validationSchema,
        })

        // create user
        const user = await User.create(validatedData)

        // once user is created we log the user in
        await auth.login(user)

        // return view
        return response.json({ message : 'Thanks for registering!'})
    }

    /**
     * apilogin : method to handle user login
     */
    public async apiLogin({auth, request, response} : HttpContextContract) {
        
        // extract email and password
        const {email, password} = request.all()

        try {
            // using email and password try to attempt to login the user
            await auth.attempt(email, password)
            
            // return sucess message
            return response.json({ message : 'Welcome Back!'})

        } catch (_error) {
            // send 400 response
            return response.status(400).json({ message: 'Email or password is incorrect!'})
        }
    }

    /**
     * apiLoginCheck : method to check if user is logged in
     */
    public apiLoginCheck({auth} : HttpContextContract) {
        
        // if the user is authenticated then return user details if not then nothing will be returned
        return auth.user
    }

}
