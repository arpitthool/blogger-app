import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
Controller to handle pages 
*/
export default class PagesController {

    // method to render welcome page
    public home ( { view } : HttpContextContract ) {
        return view.render('blogs/index')
    }

    // method to render about page
    /*
    public about () {
        return 'This is the about page'
    }
    */
    // Render views instead of returning string
    public about ( { view } : HttpContextContract ) {
        return view.render('about')
    }

    // method to render contact page
    /*
    public contact () {
        return 'This is the contact page'
    }
    */
    // Render views instead of returning string
    public contact ( { view } : HttpContextContract) {
        return view.render('contact')
    }

    // method to render hello page using the 'name' param passed
    /*
    public hello ( { params } : HttpContextContract ) {
        return `Hello ${params.name}, hope your day is going well :)`
    }
    */
    public hello ( { view, params } : HttpContextContract ) {
        const name = params.name
        return view.render('hello', { name }) // passing name variable to the view
    }

    // method to render greeting page using the 'name' param passed
    /*
    public greeting ( { params } : HttpContextContract ) {
        return params.name ? `Greetings ${params.name}! hope your day is going well :)` : `Greetings user! hope your day is going well :)`
    }
    */
    public greeting ( { view, params } : HttpContextContract ) {
        const name = params.name
        return view.render('greeting', { name })
    }
}

