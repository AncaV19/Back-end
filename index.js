const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbo = require("./db_connection.js");
app.use(bodyParser.json());

dbo.connectToServer((err) => console.log(err));

app.put("/new-recipe", (req, res) => {
  console.log(req.body);
  const dbConnect = dbo.getDb();
  dbConnect.collection("recipes").insertOne(req.body, function (err, result) {
    if (err) {
      res.status(400).send("Error inserting matches!");
    } else {
      console.log(`Added a new match with id ${result.insertedId}`);
      res.status(204).send();
    }
  });
});
app.get("/", async function (req, res) {
  res.send("Hello World");
});
app.get("/recipes", async (req, res) => {
  const dbConnect = dbo.getDb();
  const ress = res;
  const collection = dbConnect.collection("recipes");
  let result = await collection.find({}).limit(50).toArray();
  console.log(result);
  res.json({ resultSet: result });
});
app.listen(3001);
