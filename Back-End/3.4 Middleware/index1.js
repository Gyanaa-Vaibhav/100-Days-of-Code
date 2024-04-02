import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";



const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({extended : true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // console.log(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})
