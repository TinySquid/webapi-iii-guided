const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");

const hubsRouter = require("./hubs/hubs-router.js");

const server = express();

// middleware

server.use(helmet());
server.use(express.json()); // built-in middleware
server.use(logger);

// endpoints
server.use("/api/hubs", checkRole("admin"), hubsRouter); // the router is local middleware, because it only applies to /api/hubs

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

// commit
server.get("/echo", (req, res) => {
  res.send(req.headers);
});

// shift + alt + up (or down) to copy the selected lines
server.get("/area51", gateKeeper, checkRole("agent"), (req, res) => {
  res.send(req.headers);
});

module.exports = server;

// custom middleware uses the "Three Amigas" (three female friends)
function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`);

  next(); // allows the request to continue to the next middleware or route handler
}

// gateKeeper, checkRole('admin')
function gateKeeper(req, res, next) {
  const password = req.headers.password;

  if (password && password.toLowerCase() === "mellon") {
    next();
  } else {
    res.status(401).json({ you: "shall not pass!!" });
  }
}

// checkRole('admin'), checkRole('agents')
function checkRole(role) {
  return function (req, res, next) {
    if (role && role === req.headers.role) {
      next();
    } else {
      res.status(403).json({ message: "can't touch this!" });
    }
  };
}