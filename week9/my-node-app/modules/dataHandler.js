const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

const getUserHandler = () => {
  const data = fs.readFileSync(usersPath, "utf-8");
  return JSON.parse(data);
};

const getUserByIdHandler = (id) => {
  const users = getUserHandler();
  return users.find((user) => user.id === parseInt(id));
};

const createUserHandler = (req, res) => {
  const users = getUserHandler();
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end()
  });
};

module.exports = {
  getUserHandler,
  getUserByIdHandler,
  createUserHandler,
};
