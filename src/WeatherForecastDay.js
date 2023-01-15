import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay mt-4">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecastTemp mb-4">
        <span className="WeatherForecastTempMax">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="WeatherForecastTempMin">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
