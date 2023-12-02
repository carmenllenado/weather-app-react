import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data)

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            city: response.data.name,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
            date: new Date(response.data.dt * 1000)
        });

    }

    function search() {
        const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    onChange={handleCityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit"
                            value="Search"
                            className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                </div>
        )
    } else {
        search();
        return "Loading...";
    }

}