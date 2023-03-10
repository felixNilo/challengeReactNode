const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("./database");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const saltRounds = 10;

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "felix",
    resave: true,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, (errr, hash) => {
    const data = {
      email: req.body.email,
      password: hash,
    };
    if (errr) {
      console.log(err);
    } else {
      let sqll = `select * from users where email='${email}'`;
      pool.query(sqll, (er, ress) => {
        if (er) {
          console.log(er);
          res.send({ msg: "Error Occured" });
        } else if (ress && ress.length > 0) {
          res.send({ msg: "User Email Already Present" });
        } else {
          let sql = "INSERT INTO `users` SET ?";
          pool.query(sql, data, (err, result) => {
            if (err) {
              console.log(err);
              res.send({ msg: "Error Occured" });
            } else {
              //  console.log(result);
              res.send(result);
              // res.send()
            }
          });
        }
      });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let sql = `select * from users where email='${email}'`;
  // console.log(sql);
  pool.query(sql, (err, result) => {
    if (err) {
      // res.send({err:err})
      console.log(err);
    } else {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (errr, response) => {
          if (response) {
            req.session.user = result;
            // console.log(req.session.user);

            res.send({ login: true, useremail: email });
          } else {
            res.send({ login: false, msg: "Wrong Password" });
          }
        });
      } else {
        res.send({ login: false, msg: "User Email Not Exits" });
        // console.log("noo email ")
      }
    }
  });
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ login: true, user: req.session.user });
  } else {
    res.send({ login: false });
  }
});

app.get("/data", (req, res) => {
  // check if the user is logged in
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  const filePath = __dirname + "/data/registro.csv";
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    } else {
      console.log("File sent");
    }
  });
});


app.listen(PORT, () => {
  console.log(`app running in ${PORT}`);
});
