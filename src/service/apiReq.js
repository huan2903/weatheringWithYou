import axios from "axios";

const apiKey = 'c11ea753c2b8fa070844872de217481c';
export const currentWeather = async (lat,lon) => {
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
};