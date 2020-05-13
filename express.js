const express = require("express");
const app = express();

app.get("/:route", (req, res) =>{
  console.log(`Обробка GET: ${req.url}`);
  console.log("query:", req.query.a);
  console.log("params:", req.params.route);
  res.send("Hello World");
});
app.get("/test", (req, res) =>{
  console.log(`Обробка GET/test: ${req.url}`);
  res.send("HW test");
});

app.put("*", (req, res) =>{
  console.log(`Обробка PUT: ${req.url}`);
  res.send("Put Hello World");
});

app.listen(3000);