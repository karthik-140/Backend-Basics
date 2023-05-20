const http = require("http");

const server = http.createServer((req, res) => {
  //process.exit();
  //console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST" ><input type="text" name="message" /><button>click</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write("<body><h1>Welcome to home page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write("<body><h1>Welcome to about us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My new Server</title></head>");
    res.write("<body><h1>Welcome to node js Project</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>My new Server</title></head>");
  res.write("<body><h1>Hello welcome to the server side</h1></body>");
  res.write("</html>");
  res.end();
});


server.listen(4000);