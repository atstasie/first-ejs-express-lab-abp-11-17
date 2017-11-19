var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Welcome to HTML"
  const favoriteThings = ["Cats", "Learning"]
  const viewData = {
    "welcomeText": welcomeText,
    name: "Anastassia",
    colors: ["Blue", "Red", "Purple"],
    faoriteThings: favoriteThings
  }

resp.render("index, viewData")
})




module.exports = app
