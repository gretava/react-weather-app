import { useState } from 'react';
import styles from './searchBar.module.scss';

export default function SearchBar({ onSearch, setLocation }) {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called with city:', city);
    setLocation(city);
    // Make sure to call onSearch with the city directly
    onSearch();
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        value={city}
        placeholder="Enter a city name"
        onChange={(e) => {
          setCity(e.currentTarget.value);
        }}
      />
      <button className={styles.searchBtn}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
          alt="search--v1"
        />
      </button>
    </form>
  );
}
