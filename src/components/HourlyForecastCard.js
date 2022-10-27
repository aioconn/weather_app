import React, {useState} from 'react';
import styles from './HourlyForecastCard.module.css'
import Card from "react-bootstrap/Card";
import Axios from 'axios';


const HourlyForecastCard = props => {

    const [data, setData] = useState('')


    /*
    Axios.get(`http://api.openweathermap.org/data/3.0/onecall?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}&units=imperial&exclude=alerts,minutely,current&&appid=`)
        .then( response => {
            setData(response.data)
            console.log(data)
        });
    */

    return (
        <Card className={styles.card}>
            <div>
                Time
                {
                    /*
                    const unixTimestamp = props.data.hourly.dt;
                    const date = new Date(unixTimestamp * 1000);
                    {date.toLocaleTimeString("en-US");}
                    */
                }
            </div>
            <div>
                {props.data.main ? <span className={styles.temperature}> {Math.round(props.data.main.temp)}&deg;</span> : null}
            </div>
            <div>
                {props.data.weather ? <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/> : null}
            </div>
        </Card>
    )
};

export default HourlyForecastCard;
