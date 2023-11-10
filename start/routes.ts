/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

/*
// route accepts 2 arguments : 1. URI pattern 2. route handler
// a route handler can either be inline or using a controller

// All 1,2 & 3 achieve the same result

// 1
// Route.on('/').render('welcome')

// 2. route inline handler where we get the http-context
// Route.get('/', async (context) => { 
//   return context.view.render('welcome')
// })

// 3. route inline handler by destructuring the context
Route.get('/', async ({ view }) => { 
  return view.render('welcome')
})

// About Rpute
Route.get('/about',async () => {
  return 'This is the about page'
})

// About Rpute
Route.get('/contact',async () => {
  return 'This is the contact page'
})

// Dynamic Routes : take dynamic values in the form of parameters

// here we destructed the context to get params
// here the name parameter is compulsory and if not provided the url will result in 404 error
Route.get('/hello/:name', async ({params}) => {
  return `Hello ${params.name}, hope your day is going well :)`
})

// route with optional parameter : notice the '?' in the route pattern
Route.get('/greeting/:name?', async ({params}) => {
  return params.name ? `Greetings ${params.name}! hope your day is going well :)` : `Greetings user! hope your day is going well :)`
})

*/

// Inline route handlers are a bit messy and it is recommend to use a Controllers to implement route handler
// Route handler formate : 'CONTROLLER_NAME.METHOD_NAME'

// we use as('ROUTE_NAME') to name the routes
// this makes it easy to refer to the route from the view page : {{ route('ROUTE_NAME') }}
// and saves time as we would not need to change the link text every time we decide to modify the route text

// Route.get('/', 'PagesController.home').as('home')

Route.get('/about', 'PagesController.about').as('about')

Route.get('/contact', 'PagesController.contact').as('contact')

Route.get('/hello/:name', 'PagesController.hello').as('hello')

Route.get('greeting/:name?', 'PagesController.greeting').as('greeting')

/*
Blog routes
*/

// route to get all blogs
Route.get('/', 'BlogsController.index').as('home')

// route to insert new blog
Route.post('/blog', 'BlogsController.store').as('storeBlog')

// route to delete blog with specified id
Route.delete('/blog/:id', 'BlogsController.deleteBlog')

/*
Auth routes
*/

// route to get register page
Route.get('/register', 'AuthController.showRegister')

// route to register user
Route.post('/register', 'AuthController.register')