import React, { Component } from "react";
import { connect } from "react-redux";

import Loader from "../Loader";
import Swiper from "./swiper";

import "./styles.scss";

class ForecastContents extends Component {
  demo = () => {
    const { fetching, forecasts, error } = this.props;

    if (fetching) {
      return <Loader />;
    } else if (forecasts) {
      return <>{forecasts.location}</>;
    } else if (error) {
      return <>Double Check!</>;
    }
  };

  render() {
    return <div>{this.demo()}</div>;
  }
}

const mapStateToProps = state => ({
  fetching: state.pending,
  forecasts: state.forecasts,
  error: state.error
});

export default connect(mapStateToProps)(ForecastContents);
