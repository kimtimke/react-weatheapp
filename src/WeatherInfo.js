import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <WeatherIcon code={props.data.icon} />

            <div className="float-left">
              <span>
                <strong className="temperature">
                  {" "}
                  {Math.round(props.data.temperature)}
                </strong>
              </span>
              <span className="units">°C</span>
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
