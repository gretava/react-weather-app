import axios from 'axios';
import { countries } from 'countries-list';
import React, { useEffect, useState } from 'react';
import styles from './app.module.scss';
import SearchBar from './SearchBar.js';

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('London');
  const [weatherError, setWeatherError] = useState(null);

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
          setWeatherError(null);
        } catch (error) {
          console.error('Error fetching data:', error);
          setWeatherError('City not found. Please try again.');
        }
      }
    };

    fetchData();
  }, [location, apiKey]);

  // Function to get full country name from country code
  const getCountryFullName = (countryCode) => {
    return countries[countryCode]?.name || 'Unknown';
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const setBackgroundImage = (image) => {
    document.body.style.background = `url('${image}')`;
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    const dayImageUrl = process.env.PUBLIC_URL + '/images/day.jpg';
    const nightImageUrl = process.env.PUBLIC_URL + '/images/sky2.jpg';

    if (currentHour >= 8 && currentHour <= 18) {
      setBackgroundImage(dayImageUrl);
    } else {
      setBackgroundImage(nightImageUrl);
    }

    return () => {
      setBackgroundImage(''); // Reset the background when component unmounts
    };
  }, []);

  return (
    <div>
      <main className={styles.app}>
        <SearchBar onSearch={() => {}} setLocation={setLocation} />
        {weatherError ? (
          <>
            <br />
            <br />
            <span className="error-message">
              <span>{weatherError}</span>
            </span>
          </>
        ) : (
          data.name !== undefined &&
          data.main !== undefined && (
            <div className={styles.container}>
              <div className={styles.top}>
                <div className={styles.location}>
                  <h2>
                    {data.name}, {''}
                    {getCountryFullName(data.sys.country)}
                  </h2>
                </div>
                <div className={styles.weatherBox}>
                  <div className={styles.description}>
                    <div>
                      {data.weather ? (
                        <>
                          <div>
                            <img
                              className={styles.img}
                              height={75}
                              width={75}
                              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                            />
                          </div>
                          <span className={styles.desc}>
                            {capitalizeFirstLetter(data.weather[0].description)}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <p className={styles.temp}>
                    {data.main ? (
                      <span>
                        {Math.round(data.main.temp.toFixed())}
                        <sup className={styles.celsius}>°C</sup>
                      </span>
                    ) : null}
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
          )
        )}
      </main>
    </div>
  );
}
