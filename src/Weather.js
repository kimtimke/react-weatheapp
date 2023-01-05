import React from "react";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Swakopmund</h1>
      <ul>
        <li>Last updated: Sunday 09:00</li>
        <li>Clear skies</li>
        <Search />
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span>
                <strong className="temperature"> 20 </strong>
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i> Humidity:
              <span className="humidity"></span>%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> Wind:
              <span className="wind"></span> km/h
            </li>
            <li>Precipitation:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
