import React, { useState } from "react";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),

      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
          <Search />
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix d-flex align-items-center">
              <img
                src={weatherData.iconUrl}
                alt="Cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span>
                  <strong className="temperature">
                    {" "}
                    {Math.round(weatherData.temperature)}
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
                {weatherData.humidity} %
              </li>
              <li>
                <i className="fa-solid fa-wind"></i> Wind: {}
                {weatherData.wind} km/h
              </li>
              <li>Precipitation:</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6950fb0a1f88f981260fcceba2a5d047";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
