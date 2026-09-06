import { updateWeatherInfo } from './weather.js';
import { showDisplaySection } from './containerView.js';

const cityInput = document.querySelector('.city-input');
const searcBtn = document.querySelector('.search-btn');

const notFound = document.querySelector('.not-found');
const weatherInfoSection = document.querySelector('.weather-info');

const searchCity = async function () {
  const city = cityInput.value.trim();

  if (!city) return;

  const success = await updateWeatherInfo(city);

  if (success) {
    showDisplaySection(weatherInfoSection);
  } else {
    showDisplaySection(notFound);
  }

  cityInput.value = '';
  cityInput.blur();
};

searcBtn.addEventListener('click', searchCity);

cityInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchCity();
  }
});
