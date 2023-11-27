import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import styles from './index.css';
import styles from './App.css';
import SearchBar from './SearchBar.js';

// import WeatherCard from './WeatherCard.js';

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('London');

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // useEffect hook is used to fetch data when the location state changes
  useEffect(() => {
    const fetchData = async () => {
      // API call is only made if the location state is not empty (if (location))
      if (location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        try {
          const response = await axios.get(url);
          console.log('API Response:', response.data);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [location, apiKey]);

  return (
    <>
      <SearchBar onSearch={() => {}} setLocation={setLocation} />
      <div className={styles.app}>
        {data.name !== undefined && data.main !== undefined && (
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.location}>
                <h2>
                  {data.name}, {''}
                  {data.sys.country}
                </h2>
              </div>
              <div className={styles.temp}>
                <p>
                  {data.main ? (
                    <span>{Math.round(data.main.temp.toFixed())}°C</span>
                  ) : null}
                </p>
              </div>
              <div className={styles.description}>
                <p>
                  {data.weather ? <span>{data.weather[0].main}</span> : null}
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.feelsLike}>
                <p>Feels like</p>
                <p>
                  {data.main ? (
                    <span>{Math.round(data.main.feels_like)}°C</span>
                  ) : null}
                </p>{' '}
              </div>
              <div className={styles.wind}>
                <p>Wind speed</p>
                <p>{data.wind ? <span>{data.wind.speed}m/s</span> : null}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
