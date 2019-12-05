const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "client", "dist");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
