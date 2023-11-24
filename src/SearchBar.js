import { useState } from 'react';

export default function SearchBar({ onSearch, setLocation }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(city);
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Enter a city name"
        onChange={(e) => {
          setCity(e.currentTarget.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}
