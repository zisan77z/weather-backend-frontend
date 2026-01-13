চমৎকার 🔥
নিচে আমি **GitHub-ready, clean, professional README.md** দিলাম — যেটা recruiter / reviewer খুলেই বুঝবে এটা **serious full-stack project**।

👉 **Short, crisp, no extra noise**
👉 Frontend + Backend দুটোই cover করে
👉 Perfect for GitHub repo

---

# 🌦️ Smart Weather Dashboard

A **full-stack weather dashboard application** built using **Vanilla JavaScript** and **Node.js (Express)**.
It features real-world UI behavior like **hourly & weekly forecasts**, **unit conversion**, **offline support**, and **weather-based themes**.

---

## 🚀 Features

* 🌍 Multiple saved cities (Favorites)
* ⏱️ Hourly forecast (4-hour interval)
* 📆 7-day weekly forecast
* 🌡️ Unit toggle (°C / °F)
* 💾 Offline support (LocalStorage)
* 🎨 Weather-based dynamic UI themes
* 🧩 Modular & scalable architecture

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3 (Dark UI + Theme system)
* Vanilla JavaScript (ES Modules)
* LocalStorage

### Backend

* Node.js
* Express.js
* JSON-based Weather API
* CORS enabled

---

## 📁 Project Structure

### Frontend

```txt
weather-dashboard/
├─ index.html
├─ style.css
├─ main.js
│
├─ api/
│   └─ weatherApi.js
│
├─ components/
│   ├─ search.js
│   ├─ favorites.js
│   ├─ weatherCard.js
│   ├─ hourlyForecast.js
│   └─ weeklyForecast.js
│
└─ utils/
    ├─ storage.js
    ├─ setTemp.js
    └─ uniqid.js
```

### Backend

```txt
weather-server/
├─ server.js
├─ data/
│   ├─ weather.json
│   └─ generator.js
├─ package.json
├─ package-lock.json
└─ node_modules/
```

---

## 🔌 API Endpoints

| Method | Endpoint                      | Description         |
| ------ | ----------------------------- | ------------------- |
| GET    | `/weather-server?city=London` | Get weather by city |
| GET    | `/weather-server`             | Get all cities data |

---

## 🔄 App Workflow

1. User searches a city
2. Frontend fetches data from backend
3. Weather data is rendered (current, hourly, weekly)
4. Data is cached in LocalStorage
5. UI theme updates based on weather
6. On reload → last weather & unit restored

---

## 🎨 Weather-Based Themes

* ☀️ Sunny
* ☁️ Cloudy
* 🌧️ Rain
* ❄️ Snow
* 🌫️ Fog
* ⛈️ Storm

---

## 💾 LocalStorage Usage

* `last_weather` → last searched weather data
* `fav` → favorite cities
* `unit` → temperature unit preference

---

## ▶️ Run Locally

### Backend

```bash
cd weather-server
npm install
node server.js
```

Runs on:

```
http://localhost:5000
```

### Frontend

* Open `index.html` with **Live Server**
* OR any static local server

---

## 📌 Highlights

* No framework dependency
* Clean modular code
* Real-world UI behavior
* Frontend + Backend separation
* Portfolio & interview ready

---

## 📈 Future Improvements

* Real OpenWeatherMap API
* Skeleton loaders
* API caching
* PWA support
* Geolocation weather

---

## 👨‍💻 Author

**Smart Weather Dashboard**
Built for learning **advanced JavaScript**, **UI state management**, and **API integration**.

---


🔹 GitHub Repo Description (One-Liner)

A full-stack smart weather dashboard with hourly & weekly forecasts, unit toggle, offline support, favorites, and weather-based dynamic UI built using Vanilla JavaScript and Node.js.
