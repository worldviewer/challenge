import React from 'react';

const WeatherForecast = ({ forecast = null }) =>
  (forecast && forecast.list && (
    <div>
      { forecast.list.map(({ dt_txt, main }) => (
        <div>
          <span>{new Date(dt_txt).toLocaleString()}</span>
          <br />
          <span>{main && Math.round(main.temp - 271)}℃</span>          
        </div>
      )) }
    </div>
  )) || null;

export default WeatherForecast;
