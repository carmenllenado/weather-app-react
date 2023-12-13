import React, { useState } from "react";
import Axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
       return(
        <div className="WeatherForecast">
           <div className="row">
            <div className="col-6">
               <WeatherForecastDay data={forecast[0]} img={`https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}.png`}/>
            </div>
           </div>
        </div>
    ); 
    } else {
        
            const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
            let longitude = props.coordinates.lon;
            let latitude = props.coordinates.lat;
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            Axios.get(apiUrl).then(handleResponse);

            return null;
        
    }
    
}