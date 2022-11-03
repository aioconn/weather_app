import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from "./components/LocationForm";
import CurrentWeather from "./components/CurrentWeather";
import {useState} from "react";
import Axios from "axios";
import HourlyForecast from "./components/HourlyForecast";

function App() {

    const [data, setData] = useState('')
    const [hourlyData, setHourlyData] = useState('');
    const [showCurrentWeather, setShowCurrentWeather] = useState(false);
    const [showHourlyWeather, setShowHourlyWeather] = useState(false);
    const [enteredLocation, setEnteredLocation] = useState('');


    const getCurrentWeather = (name) => {
        const location = name.trim().split(',');
        const city = location[0].trim();
        const state = location[1].trim();
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=&units=imperial`)
            .then( response => {
                setData(response.data)
                console.log(response.data)
                Axios.get(`http://api.openweathermap.org/data/3.0/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=imperial&exclude=alerts,minutely,current&&appid=`)
                    .then( response => {
                        setHourlyData(response.data)
                        console.log(response.data)
                    })
            })

    }

    const addCurrentWeatherHandler = (location) => {
        getCurrentWeather(location)
        setEnteredLocation(location)
        setShowHourlyWeather(false);
        setShowCurrentWeather(true);
    }

    const addHourlyWeatherHandler = () => {
        setShowCurrentWeather(false);
        setShowHourlyWeather(true);
    }

    const showCurrentWeatherHandler = () => {
        setShowCurrentWeather(true);
        setShowHourlyWeather(false);
    }


  return (
      <div className={"background-image"}>
          <LocationForm currentWeather={addCurrentWeatherHandler}/>
          {showCurrentWeather && <CurrentWeather data={data} name={enteredLocation} showForecast={addHourlyWeatherHandler}/>}
          {showHourlyWeather && <HourlyForecast data={data} hourlyData={hourlyData} name={enteredLocation} showCurrentWeather={showCurrentWeatherHandler}/>}
      </div>
  );
}

export default App;
