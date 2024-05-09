const http = require("http");
const url = require("url");
const fs = require("fs");

const myVar = 45;

// http module
const server = http.createServer((req, res) => {
  // URL module
  /*try {
    let q = url.parse(req.url, true).query;
    let text = q.year + " " + q.month + " " + q.day;
    res.write(text);
  } catch (e) {
    res.write("error");
  }*/

  // fs module
  fs.readFile("input.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(3000);
console.log("server is running on port 3000...");
console.log("http://localhost:3000");
