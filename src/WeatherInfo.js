import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <WeatherIcon code={props.data.icon} />

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i> Humidity: {}
              {props.data.humidity} %
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> Wind: {}
              {props.data.wind} km/h
            </li>
            <li>Precipitation:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
