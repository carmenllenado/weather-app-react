import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return(
        <div className="WeatherForecast">
           <div className="row">
            <div className="col-6">
               <div className="WeatherForecast-day">Wed</div>
               <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
               <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19º </span>
                <span className="WeatherForecast-temperature-min">10º</span>
               </div>
            </div>
           </div>
        </div>
    );
}