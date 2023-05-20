const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //process.exit();
  //console.log(req.url, req.headers, req.method);

  const url = req.url;
  const method = req.method;
  
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<html>");
      res.write("<head><title>My new Server</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><p id="enteredText"> </p><form id="messageForm" action="/message" method="POST" ><input type="text" name="message" /><button type="submit">click</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write("<body><h1>Hello welcome to the server side</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
