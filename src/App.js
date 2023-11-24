import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
// import styles from './index.css';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

// require('dotenv').config();

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  console.log('API Key:', process.env.WEATHER_API_KEY);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <>
      <SearchBar onSearch={searchLocation} setLocation={setLocation} />
      <WeatherCard />
    </>
  );
}
