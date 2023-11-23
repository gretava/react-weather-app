import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
// import styles from './index.css';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

export default function App() {
  return (
    <>
      <SearchBar />
      <WeatherCard />
    </>
  );
}
