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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Cloudy"
          />
          <strong> 20 </strong>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:</li>
            <li>Wind:</li>
            <li>Precipitation:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
