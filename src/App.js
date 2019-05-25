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

        this.debouncedFetchGeoCode = debounce(this.fetchGeoCode, 500);
    }

    fetchGeoCode = () => {
        geocode(this.state.location)
            .then(({ lat, lng }) => this.setState({ lat, lng }))
            .catch(err =>
                this.setState({
                    lat: null,
                    lng: null,
                    forecast: null
                })                
            );
    };

    componentDidUpdate(prevProps, prevState) {
        const { lat, lng } = this.state;

        if (prevState.lat !== lat && lat !== null) {
            getWeather(lat, lng)
                .then(({ forecast }) => this.setState({ forecast }))
                .catch(err => console.error(err));
        }
    }

    render = () => {
        return (
          <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Input
                style={{ width: 200 }}
                onChange={location =>
                    this.setState({location}, () => this.debouncedFetchGeoCode())
                }
            />
            <WeatherForecast forecast={this.state.forecast} />
            </header>
          </div>
        );
    }
}

export default App;
