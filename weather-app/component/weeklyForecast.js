import { setTemp } from "../utils/setTemp.js";
import { weeklyCards } from "../main.js";
export function weeklyForecast(data) {
  weeklyCards.innerHTML = null;
  let html = null;
  data.forEach(d => {
    html += `<div class="weekly-card">
                <div class="day">${d.day}</div>
                <img class="icon" src="https://openweathermap.org/img/wn/${d.icon}@2x.png" alt="Sunny">
                <div class="temp-range">${setTemp(d.temp_max)} / ${setTemp(d.temp_min)}</div>
            </div>`;
  });
  weeklyCards.innerHTML = html;
}