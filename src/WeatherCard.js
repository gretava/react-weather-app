import styles from './App.css';

export default function WeatherCard() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.location}>
            <p>London</p>
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
            Feels like
            <p>18°C</p>
          </div>
          <div className={styles.wind}>
            Wind speed
            <p>5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
