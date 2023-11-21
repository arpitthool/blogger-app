# blogger-app

This Blogger web app uses TypeScript (prohgramming language), AdonisJS (backend framework), Svelte (frontend framework) & PostgreSQL (database). A guest is able to read existing blogs and sign up for an account. A logged in user can create new blogs, delete their own blogs and also like/dislike the blogs of their choice.

------

# APP DEMO 

https://github.com/arpitthool/blogger-app/assets/26833013/c163cb61-52e0-458c-997d-9984355a5512

----


# APP SETUP : BACKEND

This is a web Blog app built using AdoniJS TyperScript. Edge templates are used UI and the app uses PostgreSQL database.

# Setup and configure backend app

## Install modules

    cd backend

    npm install

## Make sure that postgresql is setup and running

## create .env file in the root folder and configure it according to your database credentials

    PORT=3333
    HOST=0.0.0.0
    NODE_ENV=development
    APP_KEY=MY_APP_KEY
    DRIVE_DISK=local
    SESSION_DRIVER=cookie
    CACHE_VIEWS=false
    DB_CONNECTION=pg
    PG_HOST=127.0.0.1
    PG_PORT=5432
    PG_USER=lucid
    PG_PASSWORD=password
    PG_DB_NAME=blogs

## run migrations

    node ace migration:run

## seed dummy data into databse (OPTIONAL)

    node ace db:seed

## start app

    node ace serve

-----

# APP SETUP : FRONTEND

## Create and run Sveltekit typescript app

    npm create svelte@latest frontend

    cd frontend

    npm install

    npm run dev

-------

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
  
    grant all privileges on database mydb to myuser;

## select a db
 
    \c DB_NAME

## show table content
 
    select * from TABLE_NAME
-------



    
