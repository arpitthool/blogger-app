# blogger-app

This Blogger web app uses TypeScript (programming language), AdonisJS (backend framework), Svelte (frontend framework) & PostgreSQL (database). A guest is able to read existing blogs and sign up for an account. A logged in user can create new blogs, delete their own blogs and also like/dislike the blogs of their choice.

------

# APP DEMO 

https://github.com/arpitthool/blogger-app/assets/26833013/c163cb61-52e0-458c-997d-9984355a5512

----

# APP SETUP (DOCKER) : 

## Install docker and docker-compose

Steps to install docker : https://docs.docker.com/engine/install/

Steps to install docker-compose : https://docs.docker.com/compose/install/

## Build and run the docker-compose file

This docker-compose command builds the required images by using the Dockerfiles for frontend and backend, located in
their respective directories. This will also spin up a PostgreSQL container for database. Note: As the PostgreSQL
container ephemeral it will only persist its data as long as the container keeps running.

    docker-compose up -d --build

The frontend app should be available on http://localhost:3000 and the backend app on http://localhost:3333

----

Follow below instructions if you want to individually run the backend, frontend and database services without docker


#  APP SETUP : BACKEND

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
    PG_USER=postgres
    PG_PASSWORD=password
    PG_DB_NAME=postgres

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

# DATABASE SETUP

Note : Here are the installation and setup instruction for PostgreSQL service for Ubuntu

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
 
    create database postgres;

## create user and set password
 
    create user postgres with encrypted password 'password';

## grant db permissions to the user
  
    grant all privileges on database postgres to postgres;

-------



    
