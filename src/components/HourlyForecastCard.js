import React from 'react';
import styles from './HourlyForecastCard.module.css'
import Card from "react-bootstrap/Card";


const HourlyForecastCard = props => {

    const convertTime = (time)  => {
        const date = new Date(time * 1000);
        return(
            date.toLocaleTimeString("en-US", {timeStyle: 'short'})
        )
    }

    return (
        <Card className={styles.card}>
            <div>
                {convertTime(props.time)}
            </div>
            <div>
                {<span className={styles.temperature}> {Math.round(props.temp)}&deg;</span>}
            </div>
            <div>
                {<img className={styles.icon} src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}/>}
            </div>
        </Card>
    )
};

export default HourlyForecastCard;
