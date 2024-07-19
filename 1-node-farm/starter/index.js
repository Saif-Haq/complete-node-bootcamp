const fs = require("fs");
const http = require("http");
const url = require("url");

const products = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/") {
    res.end("Hello from Server!");
  } else if (pathName === "/home") {
    res.end("Namaste from Server!");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(products);
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
