import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';

// Icons
import {WiHumidity, WiThermometer, WiWindy } from 'react-icons/wi'
import {ImEye } from 'react-icons/im';
import {CgArrowsMergeAltV } from 'react-icons/cg';

//Components
import ShowError from './ShowError';

// Styles
import '../styles/Weather.css';

const Weather = () => {
    const { capital } =  useParams();
    const API_KEY = 'a57f5af089e2679515e6b94190bd1c49';
    const toDate = new Date ();
    const history = useHistory();
    
    //State
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] =  useState(false);
    
    useEffect ( () => {
        const handleFetchWeather = async () => {
            try {
                const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${API_KEY}&units=metric`);
                if(!response.ok) {
                    throw Error('Could not fetch data for that resorce');
                }
                const data = await response.json()
                setWeatherData(data);
            } catch (error) {
                setError(true);
                console.log(error.message);
            }
        }
        handleFetchWeather();
    }, [capital])

    return (
            error
            ? <ShowError message={'City'}/>
            : (
                weatherData && (
                <div className="main-container">
                    <div className="weather-container">
                        <h2>{weatherData.name}</h2>
                        <p>{`${toDate.toDateString()}, ${toDate.toLocaleTimeString()}`}</p>
                        <div className="main-temperature">
                            <img 
                                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                                alt={weatherData.main.description} 
                                />
                            <p className="weather-descrip">{weatherData.weather[0].description}</p>
                            <h1>{`${Math.round(weatherData.main.temp)} °C`}</h1>
                        </div>
                        <div className="weather-others">
                            <div className="others-details-item">
                                <WiThermometer className="start" color='#2d3142' size='50px'/>
                                <span>Hight / Low </span>
                                <span>{`${Math.round(weatherData.main.temp_max)}° / ${Math.round(weatherData.main.temp_min)}°`}</span>
                            </div>
                            <div className="others-details-item">
                                <WiWindy className="start" color='#2d3142' size='50px'/>
                                <span>Wind </span>
                                <span>{`${weatherData.wind.speed}km/h`}</span>
                            </div>
                            <div className="others-details-item">
                                <WiHumidity className="start" color='#2d3142' size='50px'/>
                                <span>Humidity </span>
                                <span>{`${weatherData.main.humidity}%`}</span>
                            </div>
                            <div className="others-details-item">
                                <CgArrowsMergeAltV className="start" color='#2d3142' size='40px'/>
                                <span>Pressure </span>
                                <span>{`${weatherData.main.pressure} mb`}</span>
                            </div>
                            <div className="others-details-item">
                                <ImEye className="start" color='#2d3142' size='40px'/>
                                <span>Visibility </span>
                                <span>{`${weatherData.visibility /1000}km`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="btns-container">
                        <Link to="/"> <button className="btn">Go Home</button> </Link>
                        <button className="btn" onClick={() => history.goBack()}>Go Back</button>
                   </div>
                </div>
                )
            )
    )
}

export default Weather;