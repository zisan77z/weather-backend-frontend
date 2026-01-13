import { setTemp } from "../utils/setTemp.js";
import { weatherSction, $id, changeUITHEME } from "../main.js";
import { setFavarite } from "./favorites.js"
export function weatherCard(data) {
  weatherSction.innerHTML = `<div id="weatherCard">
        <h2 id="cityName">${data.city}</h2>
        <img 
        id="weatherIcon"
        src="https://openweathermap.org/img/wn/${data.icon}@2x.png"
        alt="${data.description}"
      />
        <p id="temperature"><i class="fas fa-temperature-high"></i> ${setTemp(data.temp)}</p>
        <p id="weatherDesc"><i class="fas fa-cloud"></i> ${data.description}</p>
        <p id="humidity"><i class="fas fa-tint"></i> Humidity: ${data.humidity}%</p>
        <p id="wind"><i class="fas fa-wind"></i> Wind: ${data.wind} km/h</p>
        <button id="addFavoriteBtn"><i class="fas fa-plus"></i> Add to Favorites</button>
      </div>`;
  setFavarite($id("addFavoriteBtn"));
  changeUITHEME(data.description)
}
/*
export function weatherCards(data) {
  const htmlString = `<div class="weatherCard">
        <h2 class="cityName">${data.city}</h2>
        <img 
        class="weatherIcon"
        src="https://openweathermap.org/img/wn/${data.icon}@2x.png"
        alt="${data.description}"
      />
        <p class="temperature"><i class="fas fa-temperature-high"></i> ${data.temp} °C</p>
        <p class="weatherDesc"><i class="fas fa-cloud"></i> ${data.description}</p>
        <p class="humidity"><i class="fas fa-tint"></i> Humidity: ${data.humidity}%</p>
        <p class="wind"><i class="fas fa-wind"></i> Wind: ${data.wind} km/h</p>
        <button class="addFavoriteBtn"><i class="fas fa-plus"></i> Add to Favorites</button>
      </div>`
  weatherSction.insertAdjacentHTML("beforeend", htmlString);
  const newCard = weatherSction.lastElementChild; // নতুন added card
  const favBtn = newCard.querySelector(".addFavoriteBtn");
  setFavarite(favBtn);
}
  */