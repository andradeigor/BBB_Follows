const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/follows", async (req, res) => {
  const rawdata = await fs.readFileSync("./data.json");
  const data = JSON.parse(rawdata);
  data.map((profile) => {
    let oldstr = profile.profileFollows;
    const newstr = oldstr.replace(/,/g, "");
    profile.profileFollows = newstr;
  });
  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log("i'm up");
});
