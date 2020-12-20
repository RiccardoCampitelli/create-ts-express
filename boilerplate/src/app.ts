import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json())
app.use(cors())

const port = 5000;

const exampleJson = {
  value: "test",
  arrayOfValues: ["one", "two", "three"]
};

app.get("/", (req, res) => {
  res.send(exampleJson);
});

app.post("/test", (req, res) => {
  const body = req.body;

  console.log(body)

  res.send(body.input.toUpperCase())
})

app.listen(port, () => console.log(`listening on port: ${port}`));