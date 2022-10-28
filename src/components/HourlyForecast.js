import React from 'react';
import Card from "react-bootstrap/Card";
import styles from './HourlyForecast.module.css'
import Button from "react-bootstrap/Button";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = props => {

    const date = new Date();
    const readableDate = date.toDateString();

    return (

        <div style={{textAlign: 'center'}}>
            <Card className={styles.card}>
                <div className={styles.date}>{readableDate}</div>
                <div className={styles.mainWrapper}>
                    <div className={styles.weatherInfo}>
                        {props.data.main ? <span className={styles.temperature}> {Math.round(props.data.main.temp)}&deg;</span> : null}
                        <div className={styles.middleWrapper}>
                            <span className={styles.location}>{props.name}</span>
                            <div>
                                <span>Max: <span className={styles.max}>{Math.round(props.hourlyData.daily[0].temp.max)}&deg;</span></span>
                                <span>Min: <span className={styles.span}>{Math.round(props.hourlyData.daily[0].temp.min)}&deg;</span></span>
                            </div>
                            <div>
                                {props.data.daily ? <span className={styles.high}>High: <span className={styles.span}>{props.data.daily.max}&deg;</span></span> : null}
                                {props.data.daily ? <span className={styles.high}>Low: <span className={styles.span}>{props.data.daily.min}&deg;</span></span> : null}
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            {props.data.weather ? <img className={styles.icon} src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/> : null}
                            {props.data.weather ? <div className={styles.weatherCondition}>{props.data.weather[0].description}</div> : null}
                        </div>
                    </div>
                    <div className={styles.hourlyWrapper}>
                        <HourlyForecastCard time={props.hourlyData.hourly[0].dt} temp={props.hourlyData.hourly[0].temp} icon={props.hourlyData.hourly[0].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[1].dt} temp={props.hourlyData.hourly[1].temp} icon={props.hourlyData.hourly[1].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[2].dt} temp={props.hourlyData.hourly[2].temp} icon={props.hourlyData.hourly[2].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[3].dt} temp={props.hourlyData.hourly[3].temp} icon={props.hourlyData.hourly[3].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[4].dt} temp={props.hourlyData.hourly[4].temp} icon={props.hourlyData.hourly[4].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[5].dt} temp={props.hourlyData.hourly[5].temp} icon={props.hourlyData.hourly[5].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[6].dt} temp={props.hourlyData.hourly[6].temp} icon={props.hourlyData.hourly[6].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[7].dt} temp={props.hourlyData.hourly[7].temp} icon={props.hourlyData.hourly[7].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[8].dt} temp={props.hourlyData.hourly[8].temp} icon={props.hourlyData.hourly[8].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[9].dt} temp={props.hourlyData.hourly[9].temp} icon={props.hourlyData.hourly[9].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[10].dt} temp={props.hourlyData.hourly[10].temp} icon={props.hourlyData.hourly[10].weather[0].icon}/>
                        <HourlyForecastCard time={props.hourlyData.hourly[11].dt} temp={props.hourlyData.hourly[11].temp} icon={props.hourlyData.hourly[11].weather[0].icon}/>
                    </div>
                </div>
                <div>
                    <Button onClick={props.showCurrentWeather} data={props.data}>View Current Weather</Button>
                </div>
            </Card>
        </div>
    );
};

export default HourlyForecast;
