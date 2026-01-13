import express from "express";
import fs from "fs";

const data = JSON.parse(fs.readFileSync(new URL("./data/weather.json", import.meta.url)));
const app = express();
const PORT = 5000;


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello ES6 Module")
});

app.get("/weather-server", (req, res) => {
  const cityQuery = req.query.city; // ?city=London
  if (cityQuery) {
    const cityData = data.find(c => c.current.city.toLowerCase() === cityQuery.toLowerCase());
    if (cityData) {
      res.json(cityData);
    } else {
      res.status(404).json({ error: "City not found" });
    }
  } else {
    res.json(data); // All cities
  }
});



app.listen(PORT, () => { console.log(`Listening on port :${PORT}`) });
