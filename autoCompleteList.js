import { updateWeatherInfo } from './weather.js';
import { showDisplaySection } from './containerView.js';

const autocompleteList = document.querySelector('.autocomplete-list');
const cityInput = document.querySelector('.city-input');
const notFound = document.querySelector('.not-found');
const weatherInfoSection = document.querySelector('.weather-info');

/////////// Test /////////
const cities = [
  'Tehran',
  'Tabriz',
  'Shiraz',
  'Mashhad',
  'Isfahan',
  'Karaj',
  'Rasht',
  'Ahvaz',
  'Berlin',
  'London',
  'Paris',
  'Tokyo',
  'New York',
  'Dubai',
];
///////////////////////////////////
const showWeatherItemList = async function (city) {
  const { srcElement } = city;
  const success = await updateWeatherInfo(srcElement.textContent);

  if (success) {
    showDisplaySection(weatherInfoSection);
    autocompleteList.classList.remove('show');
  } else {
    showDisplaySection(notFound);
  }

  cityInput.value = '';
  cityInput.blur();
};
/////////////////////////
export const showAutocompleteList = function () {
  const input = cityInput.value.trim().toLowerCase();
  autocompleteList.innerHTML = '';
  if (input === '') return autocompleteList.classList.remove('show');

  const results = cities.filter(city => city.toLowerCase().startsWith(input));

  if (results.length === 0) return autocompleteList.classList.remove('show');

  const html = results
    .map(
      city => `
    <li class="autocomplete-item">${city}</li>
    `,
    )
    .join('');
  autocompleteList.insertAdjacentHTML('beforeend', html);
  autocompleteList.classList.add('show');

  const items = document.querySelectorAll('.autocomplete-item');

  items.forEach(city =>
    city.addEventListener('click', showWeatherItemList.bind(this)),
  );
};
