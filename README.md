# blogger-app
This is a web Blog app built using AdoniJS TyperScript

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

=====
# Install and setup PostgreSQL for Ubuntu

## Install postgresql
 
    sudo apt install postgresql

    
    sudo apt install postgresql-contrib
  
## Start postgresql service and verify that it is running successfully
 
    sudo systemctl start postgresql.service

    
    sudo systemctl start postgresql.service

## Switch to postgres account
 
    sudo -i -u postgres

## Access postgres prompt
 
    psql

## create database
 
    create database DB_NAME;

## create user and set password
 
    create user myuser with encrypted password 'mypass';

## grant db permissions to the user
  
    all privileges on database mydb to myuser;

## select a db
 
    \c DB_NAME

## show table content
 
    select * from TABLE_NAME
=====

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