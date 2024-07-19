const fs = require("fs");
const http = require("http");
const url = require("url");

const res = fs.readFileSync("../1-node-farm/starter/txt/input.txt", "utf-8");

const bratLyric = "I thing the apple is rotten";
console.log(res);

fs.writeFileSync("../1-node-farm/starter/txt/saif.txt", bratLyric + Date.now());

const server = http.createServer((req, res) => {
  // console.log(req);
  const pathName = req.url;
  //   console.log(req.url);

  if (pathName === "/") {
    res.end("Hello from Server!");
  } else if (pathName === "/home") {
    res.end("Namaste from Server!");
  } else if (pathName === "/api") {
    fs.rea;
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "lana-del-rey",
    });
    res.end("<h1> Chem trails Over the Country CLub </h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("LISTENING AT PORT 3000");
});
