import { loadStorage, saveStorage } from "../utils/storage.js"
import { favUl } from "../main.js";
import { search } from "./search.js";
let favoritList = loadStorage("fav") || [];

export function setFavarite(btn) {
  btn.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement;
    const cityName = parent.querySelector("#cityName").innerText;
    console.log(cityName);

    const foundItem = favoritList.find(item => item === cityName);
    if (!foundItem) {
      favoritList.push(cityName);
      saveStorage("fav", favoritList);
      mkFavList(favoritList);
    } else {
      alert("city alredy added on list")
    }
  });
}

function mkFavList(datas) {
  let html = ""
  datas.forEach(data => {
    html += `
      <li class="fav-item">
        <span>${data}</span>
        <button class="removeFav"><i class="fas fa-times"></i></button>
      </li>`
  });
  favUl.innerHTML = html;  // += না, replace করা
  attechDeleteListner(favUl.querySelectorAll(".removeFav"));
  mkFavActive();
}

function attechDeleteListner(btns) {
  btns.forEach(btn => {
      btn.addEventListener("click", (e)=> {
      const parent = e.currentTarget.parentElement;
     const fevItem = parent.querySelector("span").innerHTML;
        favoritList = favoritList.filter(item => item !== fevItem)
        saveStorage("fav",favoritList);
        mkFavList(favoritList);
      });
  });
}

function mkFavActive() {
  favUl.querySelectorAll(".fav-item").forEach(item => {
    item.addEventListener("click", (e) => {
    const favCityName = e.currentTarget.querySelector("span").innerHTML;
      search(favCityName);
    });
  });
}