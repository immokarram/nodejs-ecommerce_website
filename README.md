# Node.js E-Commerce API 

This full E-Commerce API build using Express and Mongo. Here it contains all the required functionalities of a full-fledged E-commerce API like User registration, User Login, Category Add, Edit & Delete, Product Add, Edit, Delete, Add product feature image & Add product images, Order creation and etc...

## Setup
 
```
    $ git clone https://github.com/dinushchathurya/nodejs-ecommerce-api.git
    $ cd nodejs-ecommerce-api
    $ npm install
```
  - Duplicate and database.configexample.js as database.confi.js and fill in environment variables

  ### Run The Service
  ```
  $ nodemon app.js
  ```
## API Endpoints

## User Routes

### * Create User

`POST |  /api/v1/users/register` 

| Key       | Value          |
| --------- | -----------    |
| name      | Admin          |
| email     | admin@admin.com|
| password  | password       |
| phone     | +947187520     |
| isAdmin   | true           |
| street    | Main Street    |
| apartment | Block C        |
| zip       | 10870          |
| city      | Colombo        |
| country   | SriLanka       |

### * Login User

`POST |  /api/v1/users/login` 

| Key        | Value          |
| ---------  | -----------    |
| email      | admin@admin.com|
| password   | password       |

### * Get Users

`GET |  ` 

### * Get Single Users

`GET |  /api/v1/users/{id}` 




