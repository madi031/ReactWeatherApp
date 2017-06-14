'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const name = cityData.city.name;
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temps) => {return (9/5) * (temps - 273) + 32});
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='red' units='F' /></td>
        <td><Chart data={pressures} color='blue' units='hPa' /></td>
        <td><Chart data={humidities} color='green' units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //{ weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
