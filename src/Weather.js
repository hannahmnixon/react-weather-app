import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);

  const apiKey = "a6ff4b7a9b12bc3ba444e702f94356c3";
  let city = "San Francisco";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return (
    <div className="Weather">
      <form>
        <div className="row justify-content-end">
          <div className="col-5">
            <input
              type="search"
              placeholder="see another city"
              className="form-control"
              autoFocus="on"
            />
          </div>
        </div>
        <div className="col-4">Right now in...</div>
      </form>
      <h1>San Francisco</h1>
      <ul>
        <li>Tuesday, November 16 2:25pm</li>
        <li className="description">Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />
          <span className="temperature">16</span>
          <span className="units">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
