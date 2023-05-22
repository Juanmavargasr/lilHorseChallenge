Hi there, the following instructions will help you to set up all the necesary requirement for run the aplication. Before than start, please be sure you have isntalled MongoDB and NodeJs in your machine.

1. Create the database:
   1.1 Create a database in mongoDB. database's name must to be named "lilHorse".
   1.2 Create a collection in the database you just created, the name for the collection is users
   1.3 Copy from mongoDB the connection string
   1.4 Open the file called .env and paste the string front of MONGO_URI, replace the word "localhost" for the localhost IP. The result should be similar to: "MONGO_URI=mongodb://127.0.0.1:27017"

2. Run the application in localhost:
   2.1 Go to the main route of that repositorie with your shell.
   2.2 Run in the shell: npm install -g ts-node and npm install -g typescript
   2.3 Type in shell ts-node index.ts

when the 2nd step be completed, the application should be running in the localhost. Be sure of this going to the following url 127.0.0.1:3000, if you see "hello world!", everything is running well.

3. For make some testing in the app, please go to postman. Create an user if you dont have any and read the official documents for know how to use this.
   3.1 For test http://127.0.0.1:3000/api/register be sure of send the post in JSON.
