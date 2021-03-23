const { readFileSync, writeFileSync } = require("fs");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const count = readFileSync("./count.txt", "utf-8");
  console.log("count ", count);

  const newCount = parseInt(count) + 1;

  writeFileSync("./count.txt", newCount);

  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    .centered{
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); 
        text-allign: center;
    }
    </style>
</head>
<body>
<div class='centered'>
<h1>Welcome to my website</h1>
<h3>this page is visited ${newCount} times!</h3>
<div>
</body>
</html>
  `);
});

app.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
