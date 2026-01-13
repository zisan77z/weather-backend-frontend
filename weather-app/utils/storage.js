export function loadStorage(name) {
  return JSON.parse(localStorage.getItem(name)) || [];
}
export function saveStorage(name,array) {
  localStorage.setItem(name,JSON.stringify(array))
}


const WEATHER_KEY = "last_weather";

export function saveLastWeather(data) {
  localStorage.setItem(WEATHER_KEY, JSON.stringify(data));
}

export function getLastWeather() {
  let data = JSON.parse(localStorage.getItem(WEATHER_KEY))
  return data ? data : null ; 
}

export function getUnit() {
    return JSON.parse(localStorage.getItem("unit")) || "C"; // Default °C
}

export function saveUnit(unit) {
    localStorage.setItem("unit", JSON.stringify(unit));
}
