const express = require("express");
const app = express();

app.get("index.html", (req, res) => {
  res.send("Express is working 🚀");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
