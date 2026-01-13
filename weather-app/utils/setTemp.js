 import { getUnit } from "./storage.js";

 export function setTemp(tempC) {
  let currentUnit = getUnit();
  return currentUnit === "C" ? `${tempC} °C` : `${(tempC * 9/5 + 32).toFixed(1)} °F`;
}