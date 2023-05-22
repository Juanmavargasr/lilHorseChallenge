# Welcome to API's Challenge!

Hi there! This project is the solution to the lilHorse API's challenge. This is a RESTful API for user authentication . The app is located in the main branch of the repository. Let's take a quick look at it:

## About the app.

### Technologies used:

This app was implemented using:

- Typescript
- JWT
- Express
- MongDB

### How it works:

The app has 3 endpoints:

- Register User: /api/register -> Public endpoint that returns the user its been created.

- Login: /api/login -> Public endpoint that receives an Username an Password and returns a JWT token.

- Find: /api/users -> Private endpoint that receives the token generated in the login and returns all the users registered in database.

## Want to test it? Set Up your project!

Here you will find the instructions that will help you to set up the necessary requirement for run the app.
Before than start, be sure you have installed MongoDB, if you don't, click [here](https://www.mongodb.com/try/download/community) to download. Also check you have installed nodeJS, if you don't, click [here](https://nodejs.org/en/download) to download.

### Set up the repo

1.  Clone this Repo.
2.  Run npm install to install the required packages.
    > **Note:** Optional check the followink packages are installed: mongodb, bycrpt, dotenv, jwt, express, typescript.

### Set up database: MongoDB

1.  Create a database in mongoDB. database's name must to be named "lilHorse".
2.  Create a collection in the database you just created, the name for the collection is Users.
3.  Copy from mongoDB the connection string.
4.  Open the file called .env and paste the string front of MONGO_URI, replace the word "localhost" for the localhost IP. The result should be similar to: "MONGO_URI=mongodb://127.0.0.1:27017".

### Run the application in localhost

1.  install npm install -g ts-node and npm install -g typescript
2.  Run ts-node index.ts to run the server

Now the project is running in the localhost. Be sure of this going to the following url 127.0.0.1:3000, if you see "hello world!", everything is running well.

### Test the app with Postman

For testing the app, we will use postman. Create an user if you dont have any and read the official documents for know how to use this. If you use a postman app desktop you wouldn't need install any other app, if you use postman web, you must intall a postman agent for connect your localhost with webpostman. Click [here](https://www.postman.com/downloads/postman-agent/) to download postman agent. 

1.  REGISTER (Public Endpoint): For test http://127.0.0.1:3000/api/register be sure of send the **POST** from body in JSON format. UserID, Username and a Password are required. You can't create a Username that already exist.

    > **Note:** You can try {"UserID":123,"Username":"Juan","Password":"juanpassword"}

2.  LOGIN (Public Endpoint): For test http://127.0.0.1:3000/api/login be sure of send the **POST** from body in JSON format, you must to send a Username and Password, if LogIn is successfully, it will return a token. Copy the token brefore than go to next step.

    > **Note:** You can try {"Username":"Juan","Password":"juanpassword"}

3.  USERS(Private Endpoint):For test that **GET **http://127.0.0.1:3000/api/users you must to create a new header in postman. The Key is Authorization and the value will be "Bearer <token>". It will return all the users created in database
4.  > **Note:** You can try

| Key           | Value          | Description |
| ------------- | -------------- | ----------- |
| Authorization | `Bearer token` |             |

# You got it!
