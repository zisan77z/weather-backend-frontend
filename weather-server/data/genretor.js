import fs from "fs";

const cities = [
  "London","New York","Tokyo","Paris","Mumbai","Los Angeles","Sydney","Berlin","Moscow","Beijing",
  "Dubai","Singapore","Rome","Toronto","Chicago","Barcelona","Seoul","Bangkok","Istanbul","Cairo",
  "Madrid","Mexico City","Jakarta","Hong Kong","Lagos","Buenos Aires","Rio de Janeiro","Cape Town",
  "Lima","Kuala Lumpur","Vienna","Prague","Budapest","Warsaw","Dublin","Oslo","Stockholm","Helsinki",
  "Lisbon","Athens","Zurich","Copenhagen","Brussels","Edinburgh","Montreal","Vancouver","Melbourne","Auckland","Bangalore","Chennai","Hyderabad","Colombo"
];

const icons = ["01d","02d","03d","04d","09d","10d","11d","13d","50d"];

const weatherData = cities.map(city => {
  const temp = Math.floor(Math.random() * 20 + 10); // 10 - 30
  const humidity = Math.floor(Math.random() * 60 + 20); // 20-80
  const wind = Math.floor(Math.random() * 15 + 2);
  const description = ["Sunny","Cloudy","Rainy","Humid","Partly Cloudy"][Math.floor(Math.random()*5)];
  
  return {
    current: { city, temp, humidity, wind, description, icon: icons[Math.floor(Math.random()*icons.length)] },
    hourly: Array.from({length:6}).map((_,i)=>({
      time: `${i*4}:00`,
      temp: temp + Math.floor(Math.random()*3 -1),
      icon: icons[Math.floor(Math.random()*icons.length)]
    })),
    weekly: Array.from({length:7}).map((_,i)=>({
      day: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][i],
      temp_min: temp - Math.floor(Math.random()*5),
      temp_max: temp + Math.floor(Math.random()*5),
      icon: icons[Math.floor(Math.random()*icons.length)]
    }))
  }
});

fs.writeFileSync("weather.json", JSON.stringify(weatherData, null, 2));
console.log("50+ cities weather data generated ✅");
