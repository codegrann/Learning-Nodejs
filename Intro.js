const http = require("http");

const myVar = 45;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>Hello World  ${myVar}</h1>`);
  // res.write(req.url);
  res.end();
});
server.listen(3000);
console.log("server is running on port 3000...");
console.log("http://localhost:3000");
