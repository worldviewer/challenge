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
import { debounce } from 'lodash';
import Input from './components/Input'
import WeatherForecast from './components/WeatherForecast'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            lat: null,
            lng: null,
            forecast: null
        };

        this.fetchGeoCode = this.fetchGeoCode.bind(this);
        this.debouncedFetchGeoCode = debounce(this.fetchGeoCode, 500);
    }

    async fetchGeoCode() {
        const
            coordinates = await geocode(this.state.location);

        if (coordinates) {
            const { lat, lng } = coordinates;

            this.setState({ lat, lng });

        } else {
            this.setState({
                lat: null,
                lng: null,
                forecast: null
            });
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        if ((prevState.lat !== this.state.lat) && (this.state.lat !== null)) {
            const { lat, lng } = this.state,
                forecast = await getWeather(lat, lng);

            this.setState({ forecast });
        }
    }

    render() {
        console.log(this.state);

        const { forecast } = this.state;

        return (
          <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Input
              style={{width: 200}}
              onChange={location => this.setState({location},
                () => this.debouncedFetchGeoCode())}
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