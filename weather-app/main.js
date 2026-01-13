import { search } from "./component/search.js";
import { getLastWeather } from "./utils/storage.js";
import { weatherCard } from "./component/weatherCard.js";
import { hourlyForecast } from "./component/hourlyForecast.js";
import { weeklyForecast } from "./component/weeklyForecast.js";
import { getUnit,saveUnit } from "./utils/storage.js";

document.addEventListener("DOMContentLoaded", async () => {
    renderWeatherUI();
});




const unitBTN = $id("unitToggle");
const input = $id("cityInput");
const searchBtn = $id("searchBtn");
export const weatherSction = $id("weather-section");
const favBtn = $id("addFavoriteBtn");
export const favUl = $id("favoritesList");
export const hourlyCards = document.querySelector(".hourly-cards");
export const weeklyCards = document.querySelector(".weekly-cards");
// <- unittoggle mode ->
export let currentUnit = getUnit(); 


searchBtn.addEventListener("click", () => {
  if (input.value.trim()) {
   search(input.value);   
  }
});

unitBTN.addEventListener("click", () => {
 currentUnit = currentUnit === "C" ? "F" : "C";   
   saveUnit(currentUnit);
   renderWeatherUI();
});

export function $id(id) {
 return document.getElementById(id);
}


function renderWeatherUI(){
   const last_weather = getLastWeather();
    if (last_weather){
      // Current weather
      weatherCard(last_weather.current);
      // Hourly forecast
      hourlyForecast(last_weather.hourly);
      // Weekly forecast
      weeklyForecast(last_weather.weekly);
    } 
}

export function changeUITHEME(description) {
  const body = document.body;
  const theme = description.toLowerCase();

  // 1️⃣ Remove all themes first
  body.classList.remove(
    "theme-sunny",
    "theme-cloudy",
    "theme-rain",
    "theme-snow",
    "theme-fog",
    "theme-storm"
  );

  // 2️⃣ Apply correct theme
  if (theme.includes("sun")) {
    body.classList.add("theme-sunny");

  } else if (theme.includes("cloud")) {
    body.classList.add("theme-cloudy");

  } else if (theme.includes("rain") || theme.includes("drizzle")) {
    body.classList.add("theme-rain");

  } else if (theme.includes("snow")) {
    body.classList.add("theme-snow");

  } else if (theme.includes("fog") || theme.includes("mist") || theme.includes("haze")) {
    body.classList.add("theme-fog");

  } else if (theme.includes("storm") || theme.includes("thunder")) {
    body.classList.add("theme-storm");
  }
}







