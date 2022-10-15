const express = require("express");
const app = express();

const PORT = 3000;

app.get("/google", (req, res, next) => {
  res.sendFile(`${__dirname}/pages/google.html`);
});

app.get("/calculadora", (req, res, next) => {
  res.sendFile(`${__dirname}/pages/calculadora.html`);
});

app.get("/about", (req, res, next) => {
  res.sendFile(`${__dirname}/pages/about.html`);
});

app
  .get("/", (req, res) => {
    res.sendFile(`${__dirname}/pages/inicio.html`);
  })
  .listen(PORT);
