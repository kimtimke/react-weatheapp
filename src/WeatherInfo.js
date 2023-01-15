import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center mt-3">
            <WeatherIcon code={props.data.icon} size={58} />

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="mt-4">
              <i className="fa-solid fa-droplet"></i>
              {} Humidity: {}
              {props.data.humidity} %
            </li>
            <li className="mt-2">
              <i className="fa-solid fa-wind"> </i>
              {} Wind: {}
              {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
