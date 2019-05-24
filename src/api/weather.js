const KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;

export const getWeather = (lat, lng) => fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=${KEY}&lat=${lat}&lon=${lng}`)
  .then((resp) => resp.json())
  .catch(error => console.error(error));
