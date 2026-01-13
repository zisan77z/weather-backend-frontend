export const fetchWeather = async (city) => {
  const url = `http://localhost:5000/weather-server?city=${encodeURIComponent(city)}`;
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("City Not found");
    }
    const data = await response.json();
    // Clean object
    const current = {
      city: data.current.city,
      temp: data.current.temp,
      humidity: data.current.humidity,
      wind: data.current.wind,
      description: data.current.description,
      icon: data.current.icon
    };
    const mainData = {
      current:current,
      hourly:data.hourly,
      weekly:data.weekly
    };
    return mainData;
  } catch (e) {
    const newError = new Error(e)
    console.error(newError.message);
      throw e;
  }
}
