const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"  /><input type="number" name="quantity" /> <button>Add Product</button></form>');
});

app.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/'); 
}) 

app.use('/', (req, res, next) => {
    res.send('<h1>In Home page </h1>'); 
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

What is the body parser used for?
-- body parser is used to process the data send in an http request body from the client.

*/