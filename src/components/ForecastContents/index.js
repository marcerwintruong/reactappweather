import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import Loader from "../Loader";
import Swiper from "../Swiper";

import "./styles.scss";

class ForecastContents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "now",
      fetching: false,
      forecasts: null,
      error: null,
    };
  }

  static getDerivedStateFromProps({ fetching, forecasts, error }) {
    return {
      fetching,
      forecasts,
      error,
    };
  }

  handleRender = () => {
    const { current, fetching, forecasts, error } = this.state;

    if (fetching) {
      return <Spin size="large" />;
    } else if (forecasts) {
      return (
        <>
          <h2 className="location">{forecasts.location}</h2>
          <section className="section-buttons">
            <button
              onClick={() =>
                this.setState({
                  current: "now",
                })
              }
              name="now"
              className={current === "now" ? "active" : "inactive"}
              type="button"
            >
              now
            </button>

            <button
              onClick={() =>
                this.setState({
                  current: "hourly",
                })
              }
              name="hourly"
              className={current === "hourly" ? "active" : "inactive"}
              type="button"
            >
              hourly
            </button>

            <button
              onClick={() =>
                this.setState({
                  current: "daily",
                })
              }
              name="daily"
              className={current === "daily" ? "active" : "inactive"}
              type="button"
            >
              daily
            </button>
          </section>

          {current === "now" && (
            <div className="forecast-currently">
              <section className="first-view">
                <p>{forecasts.forecast.currently.temperature} °C </p>
                <p>{forecasts.forecast.currently.summary}</p>
              </section>

              <section className="detail">
                <p>
                  UV Index: <span>{forecasts.forecast.currently.uvIndex}</span>
                </p>
                <p>
                  Wind:{" "}
                  <span>{forecasts.forecast.currently.windSpeed} km/h</span>
                </p>
                <p>
                  Gusts:{" "}
                  <span>{forecasts.forecast.currently.windGust} km/h</span>
                </p>
                <p>
                  Humidity:{" "}
                  <span>{forecasts.forecast.currently.humidity} %</span>
                </p>
                <p>
                  Dew Point:{" "}
                  <span>{forecasts.forecast.currently.dewPoint} °C</span>
                </p>
                <p>
                  Visibility:{" "}
                  <span>{forecasts.forecast.currently.visibility} km</span>
                </p>
                <p>
                  Cloud Cover:{" "}
                  <span>{forecasts.forecast.currently.cloudCover} %</span>
                </p>
                <p>
                  Pressure:{" "}
                  <span>{forecasts.forecast.currently.pressure} mbar</span>
                </p>
              </section>
            </div>
          )}

          {current === "hourly" && (
            <div>
              <Swiper forecasts={forecasts.forecast} current={current} />
            </div>
          )}

          {current === "daily" && (
            <div>
              <Swiper forecasts={forecasts.forecast} current={current} />
            </div>
          )}
        </>
      );
    } else if (error) {
      return error;
    }
  };

  render() {
    return (
      <div className="section-forecasts-content">{this.handleRender()}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.pending,
  forecasts: state.forecasts,
  error: state.error,
});

export default connect(mapStateToProps)(ForecastContents);
