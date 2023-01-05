import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <img src={props.data.iconUrl} alt="Cloudy" className="float-left" />
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
