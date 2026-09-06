const API_KEY = '900a047d6bb62fda5104e08e031196eb';

export const getJSON = async function (endPoint, cityName = 'isfahan') {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${cityName}&appid=${API_KEY}&units=metric`;
    const res = await fetch(URL);
    if (!res.ok) throw new Error('City Doesnt Exist');
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('City Doesnt Exist');
  }
};
