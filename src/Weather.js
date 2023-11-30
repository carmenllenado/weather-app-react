import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data)

        setTemperature(response.data.main.temp);

        setReady(true);
    }
    if (ready) {
        return (

            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city..."
                    className="form-control"/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
                <h1>Makati</h1>
                <ul>
                    <li>Wednesday 07:00</li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="Mostly Cloudy"/>
                        <span className="temperature">{temperature} </span>
                        <span className="unit">ºC</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 2%</li>
                            <li>Humidiry: 70%</li>
                            <li>Wind: 13 km/h</li>
                        </ul>
                    </div>
                </div>
                </div>
        )
    } else {
        const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
        let city = "Makati";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;axios.get(apiUrl).then(handleResponse);
        
        return "Loading...";
    }

}