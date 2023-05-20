const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //process.exit();
  //console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write(
        '<body><p id="enteredText"> </p><form id="messageForm" action="/message" method="POST" ><input type="text" name="message" /><button type="submit">click</button></form></body>'
    );
    res.write("<script>");
    res.write("document.getElementById('messageForm').addEventListener('submit', (event) => {");
    res.write("event.preventDefault();"); // Prevent form submission
    res.write("const enteredText = document.getElementById('enteredText');");
    res.write("const messageInput = document.querySelector('input[name=message]');");
    res.write("enteredText.innerHTML = messageInput.value;");
    res.write("});");
    res.write("</script>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>My new Server</title></head>");
  res.write("<body><h1>Hello welcome to the server side</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
