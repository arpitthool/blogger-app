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
    public contact ( { view } : HttpContextContract) {
        return view.render('contact')
    }

    // method to render hello page using the 'name' param passed
    public hello ( { view, params } : HttpContextContract ) {
        const name = params.name
        return view.render('hello', { name }) // passing name variable to the view
    }

    // method to render greeting page using the 'name' param passed
    public greeting ( { view, params } : HttpContextContract ) {
        const name = params.name
        return view.render('greeting', { name })
    }
}

