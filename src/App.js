import React, { useEffect, useState } from 'react';
import './App.css';
import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TempAndDetails from './Components/TempAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Helpers/weatherHelpers'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query, setQuery]=useState({q: 'mumbai'});
  const [units, setUnits]=useState('metric');
  const [weather, setWeather]=useState(null);

  const getWeather= async ()=> {
    const message= query.q ? query.q: 'current location';
    toast.info(`Fetch weather data for ${message}`)
    await getFormattedWeatherData({...query, units}).then((data)=>{
      setWeather(data);
    })
  }

  useEffect(()=>{
    getWeather();
  }, [query, units]);


  const formatBackground=()=>{
    if(!weather) return 'from-cyan-400 to-blue-600';
    const threshhold= units==='metric' ? 20:60
    if (weather.temp<= threshhold) return 'from-cyan-400 to-blue-600'
    return 'from-yellow-600 to-orange-600'
  }
  
  return (
    <div className={`mx-auto max-w-screen-lg py-5 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Input setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
        <>
        <TimeAndLocation weather={weather}/>
        <TempAndDetails weather={weather}/>
        <Forecast title='3 hours step forecast' data={weather.hourly}/>
        <Forecast title='daily forecast' data={weather.daily}/>
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>

  );
}

export default App;
