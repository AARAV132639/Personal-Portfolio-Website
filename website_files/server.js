const http = require("http");
const fs= require("fs");

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/index.html", (err, data) => {

    if(err){
      res.statusCode=500;
      res.end("Error loading page");
      return;

    }
    res.end(data);
  });
});


server.listen(3000, () => {
  console.log("Listening on port 3000");
});
