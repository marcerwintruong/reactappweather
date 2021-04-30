import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Input as AntInput, Button } from "antd";

import { fetchForecasts } from "../../actions";

import "./styles.scss";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
    };
  }

  onSubmit = () => {
    const { location } = this.state;

    this.props.fetchForecasts(location);
  };

  onChange = (e) => {
    const { value } = e.target;

    this.setState({
      location: value,
    });
  };

  render() {
    const { location } = this.state;

    return (
      <div className="input-section">
        <Form layout="inline" onFinish={this.onSubmit}>
          <Form.Item>
            <AntInput
              onChange={this.onChange}
              placeholder="Location"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              disabled={location.length === 0}
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Input.propTypes = {
  fetchForecasts: PropTypes.func.isRequired,
};

export default connect(null, { fetchForecasts })(Input);
