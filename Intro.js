const http = require("http");
const url = require("url");
const fs = require("fs");
const formidable = require("formidable");

const myVar = 45;

// http module
const server = http.createServer((req, res) => {
  // fs module
  /*READ FROMA FILE
  fs.readFile("input.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });*/
  /*
   APPEND CONTENT TO A FILE

  fs.appendFile(
    "input1.txt",
    "Created this file using appendFile method",
    (err) => {
      if (err) throw err;
    }
  );*/
  /*OPEN AND WRITE TO A FILE
  fs.open("input.txt", "r", (err, file) => {
    fs.writeFile("input.txt", "this is fresh content", (err) => {});
    fs.readFile("input.txt", (err, data) => {
      res.write(data);
      res.end();
    });
  });*/
  /*DELETE FILE
  fs.unlink("input.txt", (err) => {});*/
  // URL module
  /*try {
    let q = url.parse(req.url, true);
    let text = q.year + " " + q.month + " " + q.day;
    res.write(q);
    res.end();
  } catch (e) {
    res.write("error");
  } */
  // serve file requested by client
  /*let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    }
    res.writeHead(200, { "Contet-Type": "text/html" });
    res.write(data);
    res.end();
  });*/

  // EVENT + EventEmitter

  // formidable
  // UPLOAD AND SAVE FILE

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<form action='fileupload' method='POST'>");
  res.write("<input type='file' name='fileupload'>");
  res.write("<input type='submit'>");
  res.write("</form>");
  res.end();
});

server.listen(3000);
console.log("server is running on port 3000...");
console.log("http://localhost:3000");
