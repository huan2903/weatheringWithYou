import axios from "axios";

const apiKey = "c11ea753c2b8fa070844872de217481c";

export const currentWeather = async (lat, lon) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
};
export const iconWeatherFunc = (icon) => {
  icon = icon + "@2x";
  const StringWeather = `https://openweathermap.org/img/wn/${icon}.png`;

  return StringWeather;
};
export const getLocate = async (city) => {
  return await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
  );
};
