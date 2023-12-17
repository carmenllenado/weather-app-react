import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
       return(
        <div className="WeatherForecast">
           <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                <div className="col" key={index}>
               <WeatherForecastDay data={dailyForecast} icon={forecast[0].weather[0].icon}/>
            </div>
            )  
        }
        return undefined;
        })}
            
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