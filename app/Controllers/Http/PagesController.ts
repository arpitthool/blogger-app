import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
Controller to handle pages 
*/
export default class PagesController {

    // method to render welcome page
    public home ( { view } : HttpContextContract ) {
        return view.render('welcome')
    }

    // method to render about page
    public about () {
        return 'This is the about page'
    }

    // method to render contact page
    public contact () {
        return 'This is the contact page'
    }

    // method to render hello page using the 'name' param passed
    public hello ( { params } : HttpContextContract ) {
        return `Hello ${params.name}, hope your day is going well :)`
    }

    // method to render greeting page using the 'name' param passed
    public greeting ( { params } : HttpContextContract ) {
        return params.name ? `Greetings ${params.name}! hope your day is going well :)` : `Greetings user! hope your day is going well :)`
    }
}

