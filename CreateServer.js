const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes.handler);
console.log(routes.someText)

server.listen(4000);



/*commands to install nodemon-package for running the server automatically on save changes

npm init   --> for creating the package.json file, select the options
npm install nodemon --save-dev
npm install 
*/