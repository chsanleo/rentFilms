# Backend, RentFilms
![badge](https://img.shields.io/badge/working-active-brig)

Backend proposed as an exercise to work with an external API and database. In it we have to supply information that we will process about movies together with management of rental orders and management of users.

The data is storage in two different databases, local SQL to manage the users and the orders and a remote MongoDB to manage films and the relative information to it.

The addition of new information to the movie database is done in a personalized way to the use of the application, each user request imports the required information externally. With this we are building a specific database for our users without having too much or unnecessary information.


## How to Start 🚀

+ Just clone this repository 
```
 git clone https://github.com/chsanleo/rentFilms.git
```

+ and install the packages,

```
$ npm install
```

+ run the migrations to create the database

```
$ sequelize db:migrate
```

+ populate the database

```
$ sequelize db:seed:all
```
 
+ and... WORK!.

## Project status

>Now working adding more features and improvements on it.

### Current Features 📄

+ Create a User, Order and Tokens and manage it.
+ Only one Token is valid per User.
+ The email is unic in the system because is used to login.
+ Only storage Movies the user ask in detail for.
+ Combine SQL and MongoDB for management data.
+ File properties, you can personalize completely.


### Roadmap 📋

**About the back**
+ Solve problem with the storage more than 1 movie.



**About features**
+ Implement search movie by gender.
+ Implement search movie by actors.
+ Add a field to register the user who update the information of Orders or User.



## Test the application ⚙️

Turn on the server
```
$ npm start
```

You can use the swagger API to test each back feature
```
localhost:3000/api-doc
```

Or you can use Postman instead.


use the browser of your choice and with the developer tools test. 


![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

## Used Tools 🛠️

* [Swagger](https://www.npmjs.com/package/swagger-ui-express) - API docs
* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - API docs




* [axios](https://www.npmjs.com/package/axios) - HTTP client
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Cyper 
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Token
* [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ORM
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client
* [sequelize](https://www.npmjs.com/package/sequelize) - ORM



## Author ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)


## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

You can use it without hesitation, just mention me or contact me for it.


## How to say 'thanks' to me  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to me ;). 
* Comments about always welcome!.
