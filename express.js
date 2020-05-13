const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//дані форм
app.use(bodyParser.urlencoded({extended: false}));
// файл json
app.use(bodyParser.json());

// app.get("/:route", (req, res) =>{
//   console.log(`Обробка GET: ${req.url}`);
//   console.log("query:", req.query.a);
//   console.log("params:", req.params.route);
//   res.send("Hello World");
// });
// app.get("/test", (req, res) =>{
//   console.log(`Обробка GET/test: ${req.url}`);
//   res.send("HW test");
// });

app.post("/user", (req, res) =>{
  console.log(`запит POST: ${req.url}`);
  console.log("req.body:", req.body);
  res.send("POST - Hello World");
});

app.listen(3000);