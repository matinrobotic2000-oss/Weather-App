export const getWeatherIcon = function (id) {
  if (id <= 232) return 'thunderstorm.svg';
  if (id <= 321) return 'drizzle.svg';
  if (id <= 531) return 'rain.svg';
  if (id <= 622) return 'snow.svg';
  if (id <= 781) return 'atmosphere.svg';
  if (id <= 800) return 'clear.svg';
  else return 'clouds.svg';
};

export const getCurrentDate = function () {
  const currentDate = new Date();
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  };
  return currentDate.toLocaleDateString('en-GB', options);
};
