'use strict';

import axios from 'axios';

const API_KEY = 'e968d0fdfa7c15b0af83151ba1dbf68e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
