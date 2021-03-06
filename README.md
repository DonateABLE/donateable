# ![donateABLE](https://donateable.ca/img/logo/donateABLE-long-colour-250.png)

----------

# Getting started

## Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.8/installation#installation)


Clone the repository

    git clone https://github.com/jordones/donateable.git

Switch to the repo folder

    cd donateable

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git https://github.com/jordones/donateable.git
    cd donateable
    composer install
    cp .env.example .env
    php artisan key:generate
    
**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan serve

## Database seeding

**Populate the database with seed data with relationships which includes users, charities, and supporting lookup tables. This can help you to quickly start testing the api or couple a frontend and start using it with ready content.**

Run the database seeder

    php artisan db:seed

***Note*** : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command

    php artisan migrate:refresh

## Deploying to Production

If changes to the database have been made its reccomended to reseed the database on the production DigitalOcean box. This can be done with the steps above. 

To deploy new changes, begin by taking the server offline.

    php artisan down

This will give a 503 HTTP response and Laravel will display a down for maintenance page. 

To update from the master branch simply

    git pull

Then to put the server pack online and that is it.

    php artisan up
### Optional steps

Depending on additional changes made you made need to do any of the following:

    composer install 
For changes to packages in composer.json

    php artistan migrate

To update the database with any changes in *database/migrations*

    php artisan queue:restart
For restarting queues.

**TL;DR**

    cd /var/www/html/donateable/
    php artisan down
    git pull origin master
    composer install 
    php artisan migrate
    php artisan cache:clear
    php artisan queue:restart
    php artisan up



----------

# Code overview

## Dependencies

- [doctrine/dbal](https://github.com/doctrine/dbal) - For database abstraction

## Folders

- `app` - Contains all the Eloquent models
- `app/Http/Controllers/Auth` - Contains all the auth controllers
- `app/Http/Middleware` - Contains the auth middleware
- `config` - Contains all the application configuration files
- `database/migrations` - Contains all the database migrations
- `database/seeds` - Contains the database seeder
- `routes` - Contains all the api routes defined in web.php file

## Environment variables

- `.env` - Environment variables can be set in this file

***Note*** : You can quickly set the database information and other variables in this file and have the application fully working.
