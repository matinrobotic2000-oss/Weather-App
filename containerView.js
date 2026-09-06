import { getWeatherIcon, getCurrentDate } from './date.js';

const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityTxt = document.querySelector('.humidity-value');
const windValueTxt = document.querySelector('.wind-value');
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-txt');

const forcastItemsContainer = document.querySelector(
  '.forecast-items-container',
);

const notFound = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');
const weatherInfoSection = document.querySelector('.weather-info');

export const showDisplaySection = function (section) {
  [weatherInfoSection, searchCitySection, notFound].forEach(
    section => (section.style.display = 'none'),
  );

  section.style.display = 'flex';
};

export const updateWeatherUI = function (weatherData) {
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;

  countryTxt.textContent = country;
  tempTxt.textContent = Math.round(temp) + '°C';
  humidityTxt.textContent = humidity + '%';
  windValueTxt.textContent = speed + ' M/s';
  conditionTxt.textContent = main;
  currentDateTxt.textContent = getCurrentDate();

  weatherSummaryImg.src = `img/weather/${getWeatherIcon(id)}`;
};

export const updateForecastItems = function (weatherDate) {
  const {
    dt_txt: data,
    weather: [{ id }],
    main: { temp },
  } = weatherDate;

  const dateTaken = new Date(data);

  const dateOptions = {
    day: '2-digit',
    month: 'short',
  };

  const dateResult = dateTaken.toLocaleDateString('en-GB', dateOptions);

  const forecastItem = `
    <div class="forecast-item">
      <h5 class="forecast-item-date regular-txt">
        ${dateResult}
      </h5>

      <img
        src="img/weather/${getWeatherIcon(id)}"
        class="forecast-item-img"
      />

      <h5 class="forecast-item-temp">
        ${Math.round(temp)} °C
      </h5>
    </div>
  `;

  forcastItemsContainer.insertAdjacentHTML('beforeend', forecastItem);
};

export const clearForecast = function () {
  forcastItemsContainer.innerHTML = '';
};
