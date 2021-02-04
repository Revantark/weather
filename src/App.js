import React, { useEffect, useState } from 'react';
import WeatherNew from './features/weather/weather_new';
import Location from './features/location/location';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentLocationWeather } from './features/weather/weatherSlice';

function App() {

  const loading = useSelector(state => state.weather.loading)
  const dispatch = useDispatch();
  const [permission, setPermission] = useState('Loading')
  const askPermission = async () => {

    navigator.geolocation.getCurrentPosition((p) => {
      dispatch(fetchCurrentLocationWeather(p));
    }, () => {

      setPermission("Location permission denied , allow to continue!")

    })

  }
  useEffect(() => {


    askPermission()



  }, [])

  return (
    <div className="App h-screen w-screen flex">

      {
        loading
          ? <button onClick={askPermission} className="underline focus:outline-none mx-auto text-3xl self-center" >
            {permission}
          </button>
          : <React.Fragment>
            <Location />
            <WeatherNew />
          </React.Fragment>

      }

    </div>

  );
}

export default App;
