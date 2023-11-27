import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Enter a city name"
        onChange={(e) => {
          setCity(e.currentTarget.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}
