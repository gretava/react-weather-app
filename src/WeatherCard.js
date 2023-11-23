import styles from './App.css';

export default function WeatherCard({ data }) {
  // const { name, main, weather } = data;

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.location}>
            <h2>London</h2>
          </div>
          <div className={styles.temp}>
            <h1>20°C</h1>
          </div>
          <div className={styles.description}>
            <p>Clouds</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.feelsLike}>
            <p>Feels like</p>
            <p>18°C</p>
          </div>
          <div className={styles.wind}>
            <p>Wind speed</p>
            <p>5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
