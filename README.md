# blogger-app

This Blogger web app uses TypeScript (programming language), AdonisJS (backend & frontend) & PostgreSQL (database). A guest is able to read existing blogs and sign up for an account. A logged-in user can create new blogs, delete their own blogs, and also like/dislike the blogs of their choice.

------

# Follow Our Development Progress

We are managing the SDLC, testing, and ongoing maintenance of our Blogger Web App using [GitHub Project Board](https://github.com/users/arpitthool/projects/1). Check it out to stay updated on what’s next and what's in progress!

------

# APP DEMO 

https://github.com/arpitthool/blogger-app/assets/26833013/c163cb61-52e0-458c-997d-9984355a5512

----

#  APP SETUP

This is a web Blog app built using AdoniJS TyperScript. Edge templates are used UI and the app uses PostgreSQL database.

# Setup and configure backend app

## Install modules

    npm install

## Make sure that postgresql is setup and running

## create .env file in the root folder and configure it according to your database credentials.

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
    PG_USER=postgres
    PG_PASSWORD=password
    PG_DB_NAME=postgres

Generate the APP_KEY and save it inside the .env file.

    node ace generate:key
    
## run migrations

    node ace migration:run

## seed dummy data into databse (OPTIONAL)

    node ace db:seed

## start app (development)

    node ace serve

-------

# DATABASE SETUP

Here are the installation and setup instruction for PostgreSQL service for Ubuntu

## Install postgresql
 
    sudo apt install postgresql

    
    sudo apt install postgresql-contrib
  
## Start postgresql service and verify that it is running successfully
 
    sudo systemctl start postgresql.service

## Switch to postgres account
 
    sudo -i -u postgres

## Access postgres prompt
 
    psql

## create database
 
    create database postgres;

## Create user and set the password
 
    create user postgres with encrypted password 'password';

    alter user postgres with encrypted password 'password';

## grant db permissions to the user
  
    grant all privileges on database postgres to postgres;

-------

# DEPLOYING THE APP IN PRODUCTION

## Build the AdonisJS app for production.

    node ace build --production

## Copy the environment configuration file to the build directory.

    cp .env build/

## Navigate to the build directory.
  
    cd build
    
## Install production dependencies in the build directory.

    npm ci --production
    
## Start the server.

    node server.js
    
-------
    
