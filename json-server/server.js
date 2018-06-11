// server.js
'use strict';

const fs = require("fs"),
  https = require("https"),
  jsonServer = require("json-server"),
  server = jsonServer.create(),
  router = jsonServer.router("db.json"),
  middlewares = jsonServer.defaults(),
  cors = require("cors"),
  jwt = require("express-jwt"),
  jwks = require("jwks-rsa");

/**
 * ToDo: figure out how to use this middleware to apply cors to all incoming domains or at least whitelisted ones.
 */
// var whitelist = ["https://frontend.local"];
// var corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };

/**
 * We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header.
 */
const port = process.env.PORT || 3000;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://talorlik.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://localhost:3000',
  issuer: "https://talorlik.eu.auth0.com/",
  algorithms: ['RS256']
});

// server.all("*", cors(corsOptions));
server.use(cors());

/**
 * Alternative implementation of allowing cors manually.
 */
// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,Accept,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range"
//   );
//   res.header(
//     "Access-Control-Expose-Headers",
//     "Origin,Accept,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range"
//   );
//   next();
// });

// First check for the presence of an Authorisation header at all.
// server.use(function(req, res, next) {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ error: "No credentials sent!" });
//   }
//   next();
// });
// Use middleware on all incoming requrests to validate the token.
// server.all("*", jwtCheck);
server.use(jwtCheck);

// In order to run on https 
// var options = {
//   key: fs.readFileSync("./ssl/key.pem"),
//   cert: fs.readFileSync("./ssl/cert.pem")
// };

server.use(middlewares);
server.use(router);

server.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("json-server started on port %s", 3000);
  }
});

// https.createServer(options, server).listen(3000, function() {
//   console.log("json-server started on port " + 3000);
// });