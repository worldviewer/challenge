/*
  use input element
  convert input to geocode
  request weather forecast
  display forecast with <WeatherForecast />
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import { geocode } from './api/geo.js';
import { getWeather } from './api/weather.js';
import Input from './components/Input'
import WeatherForecast from './components/WeatherForecast'
import './App.css';


class App extends Component {
  render() {
    const forecast = null
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input
            style={{width: 200}}
          />
          <WeatherForecast
            forecast={forecast}
          />
        </header>
      </div>
    );
  }
}

export default App;
