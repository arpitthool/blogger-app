# blogger-app
This is a web Blog app built using AdoniJS TyperScript

# AdoniJS useful commands

# Create app
 npx create-adonis-ts-app APP_NAME
 
# Start the app
 node ace serve --watch
 
# List all application routes
 node ace list:routes
 
# Create a controller
 node ace make:controller MyExampleController

# install lucid module
 npm install @adonisjs/lucid

# setup lucid
 node ace invoke @adonisjs/lucid

# create migration (migrations are documented database mutations, created throughout our apps life-cycle. These can be rolled back)
 node ace make:migration MyExampleMigration
 
## Install and setup PostgreSQL for Ubuntu

# Install postgresql
 sudo apt install postgresql

 sudo apt install postgresql-contrib
  
# Start postgresql service and verify that it is running successfully
 sudo systemctl start postgresql.service

 sudo systemctl start postgresql.service

# Switch to postgres account
 sudo -i -u postgres

# Access postgres prompt
 psql

# create database
 postgres=# create database mydb;

# create user and set password
 postgres=# create user myuser with encrypted password 'mypass';

# grant db permissions to the user
 postgres=# grant all privileges on database mydb to myuser;