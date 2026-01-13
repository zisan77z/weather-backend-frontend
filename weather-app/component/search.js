import { fetchWeather } from "../api/weatherApi.js";
import { weatherCard } from "./weatherCard.js";
import { saveLastWeather } from "../utils/storage.js";
import {hourlyForecast} from "../component/hourlyForecast.js";
import {weeklyForecast} from "../component/weeklyForecast.js";
export async function search(value) {
 const data = await fetchWeather(value);
 const {current,hourly,weekly} = data;
  weatherCard(current);
  hourlyForecast(hourly);
  weeklyForecast(weekly);
  saveLastWeather(data);
}