const express = require("express");
const ejs = require("ejs");
const date = require("./date");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let items = [];
let num = 0;

app.get("/", (req, res) => {
  const formatedDate = date.getDate();
  res.render("list", {
    kindOfDay: formatedDate,
    newTask: items,
    number: num,
  });
});

app.post("/", (req, res) => {
  let task = req.body.task;
  items.push(task);
  res.redirect("/");
});

app.listen(3000, () => console.log("Connected successfully to localhost"));
