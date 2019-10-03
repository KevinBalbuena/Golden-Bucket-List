require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const cors = require("cors");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);
var path = require("path");
const app = express();
const { loginUser, registerUser } = require("./Controller/authController");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
massive(CONNECTION_STRING)
  .then(db => {
    console.log("db connected");
    app.set("db", db);
  })
  .then(() => {
    require("sql-migrations").run({
      migrationsDir: path.resolve(__dirname, "db"), // This is the directory that should contain your SQL migrations.
      host: "ec2-54-225-205-79.compute-1.amazonaws.com", // Database host
      port: 5432, // Database port
      db: "sql_migrations", // Database name
      user: "awewouzgmdxxwk", // Database username
      password:
        "e2691acf6866317cbdc6af73866f1f11b6c75e13e058e2c8d33e971e9c373e5d", // Database password
      adapter: "pg" // Database adapter: pg, mysql
    });
  });

app.post("/register_user", registerUser);
app.post("/login_user", loginUser);

app.post("/api/message", (req, res) => {
  // console.log(req.body);
  client.messages
    .create({
      from: process.env.VERIFIED_NUMBER,
      to: req.body.number,
      body: req.body.message
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false });
    });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
