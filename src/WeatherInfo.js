import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={props.data.date}/>
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="temperatureDisplay col-6">
                        <div className="float-left">
                        <WeatherIcon
                        code={props.data.icon} size={52}
                        />
                        </div>
                        
                        <WeatherTemperature
                        celsius={props.data.temperature} />
                        
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
    </div>
    )
}