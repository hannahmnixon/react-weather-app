import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a6ff4b7a9b12bc3ba444e702f94356c3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-end">
            <div className="col-5">
              <input
                type="search"
                placeholder="see another city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
          </div>
          <div className="col-4">Right now in...</div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{`${weatherData.date}`}</li>
          <li className="description">{`${weatherData.description}`}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloudy"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
