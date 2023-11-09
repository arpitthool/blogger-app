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
