import React from 'react';
import './App.css';
import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TempAndDetails from './Components/TempAndDetails';
import Forecast from './Components/Forecast';
import { getWeatherData } from './Helpers/weatherHelpers';

function App() {
  const getWeather=async ()=> {
    const data= await getWeatherData('weather', {q: 'berlin'})
  }
  
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-400 to-blue-600">
      <TopButtons />
      <Input />
      <TimeAndLocation/>
      <TempAndDetails/>
      <Forecast/>
      <Forecast/>
    </div>

  );
}

export default App;
