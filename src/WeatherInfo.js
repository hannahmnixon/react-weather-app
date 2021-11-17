import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{`${props.data.city}`}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description">{`${props.data.description}`}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {`${props.data.humidity}`}%</li>
            <li>Wind: {`${props.data.wind}`} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
