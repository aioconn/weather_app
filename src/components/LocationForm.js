import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from './LocationForm.module.css';
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from 'react-icons/bs';

const LocationForm = props => {

    const [enteredLocation, setEnteredLocation] = useState('')

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
    }

    const getLocation = (event) => {
        event.preventDefault()
        props.currentWeather(enteredLocation);
        setEnteredLocation('');
    }


    return (
        <form onSubmit={getLocation}>
            <InputGroup className={styles.form} id='parent-wrapper'>
                <InputGroup.Text className={styles.searchIcon} ><BsSearch /></InputGroup.Text>
                <Form.Control className={styles.input} placeholder={"Enter Your Location: City, State"} onChange={locationChangeHandler} value={enteredLocation}/>
                <Button type={"submit"} className={styles.button}>Search</Button>
            </InputGroup>
        </form>
    );
};

export default LocationForm;
