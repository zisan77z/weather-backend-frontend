import { hourlyCards } from "../main.js";
import {setTemp} from "../utils/setTemp.js";
export function hourlyForecast(data) {
 hourlyCards.innerHTML = null;
 let html = null
 data.forEach(d => {
  html +=`<div class="hourly-card">
      <div class="time">${d.time}</div>
      <img class="icon" src="https://openweathermap.org/img/wn/${d.icon}@2x.png" alt="">
      <div class="temp">${setTemp(d.temp)}</div>
    </div>`;
 });
 hourlyCards.innerHTML = html;
}