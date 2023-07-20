const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
})

app.use((req, res, next) => {
    console.log("In the another middleware");
    res.send('<h1>Hello from Express!</h1>');     // Content-Type: text/html; charset=utf-8
    // res.send({key:1});                         // Content-Type: application/json; charset=utf-8
});

app.listen(4000);






/*commands to install nodemon-package for running the server automatically on save changes

npm init   --> for creating the package.json file, select the options
npm install nodemon --save-dev
npm install 
*/


/*
Express js Task-1:-

1.Why are we using Express JS ? Any reasons?
-- Express JS makes the workflow easier, it makes the developer role simple and efficient.

2.Install Express Js
-- npm install --save express

3.What are middlewares ?
-- Middlewares are the individual functions which are executed in a hierarchy.

4.What is next used for.
-- next is used to execute the next middleware function in the application.

5.What is res.send used for?
-- It is used to send the response to the client.

6.If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
-- Content-Type: text/html

7.If I do res.send( { key1: value }) . What will be the content-type header equal to.
-- Content-Type: application/json

8.What does app.listen(3000) do behind the scenes ?
-- It will create server on the port 3000

*/