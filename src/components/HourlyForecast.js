import React from 'react';
import Card from "react-bootstrap/Card";
import styles from './HourlyForecast.module.css'
import Button from "react-bootstrap/Button";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = props => {

    const date = new Date();
    const n = date.toDateString();

    return (

        <div style={{textAlign: 'center'}}>
            <Card className={styles.card}>
                <div className={styles.date}>{n}</div>
                <div className={styles.mainWrapper}>
                    <div className={styles.weatherInfo}>
                        {props.data.main ? <span className={styles.temperature}> {Math.round(props.data.main.temp)}&deg;</span> : null}
                        <div className={styles.middleWrapper}>
                            <span className={styles.location}>{props.name}</span>
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
                    <div>
                        <HourlyForecastCard data={props.data}/>
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
