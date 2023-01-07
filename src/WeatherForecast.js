import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
