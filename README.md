# blogger-app

# BACKEND

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

# Setup and run frontend

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



    