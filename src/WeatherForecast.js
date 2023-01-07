import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTempMax">19 </span>
            <span className="WeatherForecastTempMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
