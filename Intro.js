const http = require("http");
const url = require("url");

const myVar = 45;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  // res.write(`<h1>Hello World  ${myVar}</h1>`);
  // res.write(req.url);
  try {
    let q = url.parse(req.url, true).query;
    let text = q.year + " " + q.month + " " + q.day;
    res.write(text);
  } catch (e) {
    res.write("error");
  }
  res.end();
});

server.listen(3000);
console.log("server is running on port 3000...");
console.log("http://localhost:3000");
