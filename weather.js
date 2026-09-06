import { getJSON } from './api.js';

import {
  updateWeatherUI,
  updateForecastItems,
  clearForecast,
} from './containerView.js';

export const updateForecastInfo = async function (city) {
  const forecastDate = await getJSON('forecast', city);

  const timeTaken = '12:00:00';
  const timeToday = new Date().toISOString().split('T')[0];

  clearForecast();

  forecastDate.list.forEach(forecastWeather => {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(timeToday)
    ) {
      updateForecastItems(forecastWeather);
    }
  });
};

export const updateWeatherInfo = async function (city) {
  try {
    const weatherData = await getJSON('weather', city);

    updateWeatherUI(weatherData);
    await updateForecastInfo(city);
    return true;
  } catch (err) {
    return false;
  }
};
