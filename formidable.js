const http = require("http");
const url = require("url");
const fs = require("fs");
const formidable = require("formidable");
const path = require("path");

const server = http.createServer((req, res) => {
  // formidable
  // UPLOAD AND SAVE FILE

  if (req.url == "/fileupload" && req.method.toLowerCase() === "post") {
    let form = new formidable.IncomingForm();
    form.uploadDir = "./myfiles";
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      const oldPath = files.fileupload.filepath;
      const newPath = path.join(
        form.uploadDir,
        files.fileupload.originalFilename
      );
      fs.rename(oldPath, newPath, (err) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Uploaded");
        res.end();
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<form action='/fileupload' method='post' enctype='multipart/form-data'>"
    );
    res.write("<input type='file' name='fileupload'>");
    res.write("<input type='submit' value='Upload'>");
    res.write("</form>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000...");
  console.log("http://localhost:3000");
});
