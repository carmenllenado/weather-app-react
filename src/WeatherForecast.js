import React from "react";
import Axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">
           <div className="row">
            <div className="col-6">
               <div className="WeatherForecast-day">Wed</div>
               <img src="https://openweathermap.org/img/wn/10d@2x.png"
               alt="rain-day"/>
               <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19º </span>
                <span className="WeatherForecast-temperature-min">10º</span>
               </div>
            </div>
           </div>
        </div>
    );
}