import React from 'react';
import styles from './CurrentWeather.module.css'
import Card from "react-bootstrap/Card";
import HourlyForecastButton from "./HourlyForecastButton";

const CurrentWeather = props => {


    return (
            <div style={{textAlign: 'center'}}>
                <Card className={styles.card}>
                    <div className={styles.weatherInfo}>
                        <div className={styles.location}>{props.name}</div>
                        <div className={styles.wrapper}>
                            {props.data.main ? <span className={styles.temperature}> {Math.round(props.data.main.temp)}&deg;</span> : null}
                            {props.data.weather ? <img className={styles.icon} src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/> : null}
                        </div>
                        {props.data.weather ? <div className={styles.weatherCondition}>{props.data.weather[0].description}</div> : null}
                        {props.data.wind ? <div>Wind Speed: <span className={styles.span}>{props.data.wind.speed} mph</span></div> : null}
                        {props.data.main ? <div>Humidity: <span className={styles.span}>{props.data.main.humidity}%</span></div> : null}
                    </div>
                    <HourlyForecastButton showForecast={props.showForecast}/>
                </Card>
            </div>
    );
};

export default CurrentWeather;
