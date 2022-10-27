import React from 'react';
import Button from "react-bootstrap/Button";
import styles from './HourlyForecastButton.module.css';

const HourlyForecastButton = props => {
    return (
        <>
            <Button className={styles.forecast} onClick={props.showForecast}>
                View Hourly Forecast
            </Button>
        </>
    );
};

export default HourlyForecastButton;
