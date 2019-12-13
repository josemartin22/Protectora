if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

/* SERVING FRONTEND */
const staticPath = path.join(__dirname, "client", "dist");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

/* API ROUTES */
app.use(cors());
app.use(express.json());
const auth = require("./routes/auth");
const protectora = require("./routes/protectora");

app.use("/auth", auth);
app.use("/protectora", protectora);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
