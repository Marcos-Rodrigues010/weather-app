import React, {useState} from 'react';
import './App.css';
import InputCity from './components/InputCity';
import WeatherData from './components/WeatherData';
import {WiCloud} from 'react-icons/wi';


function App() {

  return (
    <div className="App">
      <div className="logoArea">
        <WiCloud className="cloud-logo" />
        <h1 className="logoText">Weather App</h1>
      </div>
      <InputCity />
      <WeatherData />
    </div>
  );
}

export default App;
