const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let items = [];
let num = 0;

let today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
let formatedDate = today.toLocaleDateString("en-US", options);

app.get("/", (req, res) => res.render("list", { kindOfDay: formatedDate, newTask: items, number: num }));

app.post("/", (req, res) => {
  let task = req.body.task;
  items.push(task);
  res.redirect("/");
});

app.listen(3000, () => console.log("Connected successfully to localhost"));
