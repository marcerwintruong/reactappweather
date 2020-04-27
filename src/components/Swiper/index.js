import React from "react";

import { v1 as uuidv1 } from "uuid";

import "./styles.scss";

function Swiper({ forecasts, current }) {
  return (
    <div className="slider">
      <div className="slides">
        {forecasts[current].data.map(prop => (
          <div key={uuidv1()}>
            <section className="first-view">
              {current === "daily" ? (
                <p>
                  {prop.apparentTemperatureHigh} / {prop.apparentTemperatureLow}{" "}
                  °C
                </p>
              ) : (
                <p>{prop.temperature} °C</p>
              )}

              <p>{prop.summary}</p>
            </section>
            <section className="detail">
              <p>
                UV Index: <span>{prop.uvIndex}</span>
              </p>
              <p>
                Wind: <span>{prop.windSpeed} km/h</span>
              </p>
              <p>
                Gusts: <span>{prop.windGust} km/h</span>
              </p>
              <p>
                Humidity: <span>{prop.humidity} %</span>
              </p>
              <p>
                Dew Point: <span>{prop.dewPoint} °C</span>
              </p>
              <p>
                Visibility: <span>{prop.visibility} km</span>
              </p>
              <p>
                Cloud Cover: <span>{prop.cloudCover} %</span>
              </p>
              <p>
                Pressure: <span>{prop.pressure} mbar</span>
              </p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swiper;
