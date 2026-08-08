let dataHandler = require("../modules/dataHandler");
let fs = require("fs");
let path = require("path");

const homePath = path.join(__dirname, "../public/index.html");
const aboutPath = path.join(__dirname, "../public/about.html");

let apiRoute = (req, res) => {
let { method, url } = req;

  if (url === "/api/users" && method === "GET") {
    const users = dataHandler.getUserHandler()
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (url.match(/\/api\/users\/([0-9]+)/) && method === "GET") {
    const id = url.split("/")[3];
    const user = dataHandler.getUserByIdHandler(id)
    if (user) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      res.end("<h1>user not found</h1>");
    }
  }
  else if (url === "/api/users" && method === "POST") {
    dataHandler.createUserHandler(req, res)
  }
  else if (url === "/home" && method === "GET") {
    fs.readFile(homePath, (err, data) => {
      if (err) {
        return res.end("error");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (url === "/about" && method === "GET") {
    fs.readFile(aboutPath, (err, data) => {
      if (err) {
        return res.end("error");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 page not found</h1>");
  }
};
module.exports = apiRoute;
