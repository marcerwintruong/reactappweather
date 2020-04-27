import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchForecasts } from "../../actions";

import "./styles.scss";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { location } = this.state;

    this.props.fetchForecasts(location);
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({
      location: value
    });
  };

  render() {
    const { location } = this.state;

    return (
      <div className="input-section">
        <form onSubmit={this.onSubmit}>
          <input placeholder="Location" onChange={this.onChange} />
          <button type="submit" disabled={location.length === 0}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  fetchForecasts: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchForecasts }
)(Input);
