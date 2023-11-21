# AdoniJS useful commands

## Create app
 
    npx create-adonis-ts-app APP_NAME
 
## Start the app
 
    node ace serve --watch
 
## List all application routes
 
    node ace list:routes
 
## Create a controller
 
    node ace make:controller MyExampleController

## install lucid module
 
    npm install @adonisjs/lucid

## setup lucid (lucid is AdoniJS ORM which is implementaion of Active Record Pattern. Lucid is 'Model' in the MVC pattern.Lucid being an ORM it makes database interactions easy and transparent. It is also used to define table relationships without writing a single SQL query )
 
    node ace invoke @adonisjs/lucid

## create migration (migrations are documented database mutations, created throughout our apps life-cycle. These can be rolled back)
 
    node ace make:migration MyExampleMigration

## run migrations
 
    node ace migration:run
 
## run fresh migration : recreate the database from scratch and migrate
 
    node ace migration:fresh

## make new middleware

    node ace make:middleware

## rollback migration recent migration

    node ace migration:rollback

## rollback first migration

    node ace migration:rollback --batch 0

## make seeder

    node ace make:seeder MY_SEEDER

## run all seeders

    node ace db:seed

## run a particular seeder by running below command and selecting the desired seeder

    node ace db:seed -i

## NOTE : During development phase it is okay to modify migrations but in Production we would have to create a new migration to modify table or db accordingly


## Make Lucid Model (A A Model represents a data table)
 
    node ace make:Model MY_MODEL


## install shield to prevent app from Cross Site Request Forgery (CSRF) attack 
 
    npm install @adonisjs/shield

## configure shield
 
    node ace invoke @adonisjs/shield

## install auth to add login feature
 
    npm install @adonisjs/auth

## configure auth module : select lucid, web, model naem : User, create migration : yes
 
    node ace invoke @adonisjs/auth
    