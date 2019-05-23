const KEY = '***REMOVED***'

export const getWeather = (lat, lng) => fetch(`https://api.openweathermap.org/data/2.5/forecast/hourly?APPID=${KEY}&lat=${lat}&lon=${lng}`)
  .then((resp) => resp.json())