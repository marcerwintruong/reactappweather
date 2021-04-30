import React from "react";
import { Provider } from "react-redux";
import { Row, Col } from "antd";

import store from "./store";
import Corner from "./components/Corner";
import Input from "./components/Input";
import ForecastContents from "./components/ForecastContents";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Row justify="center">
          <Corner />

          <Col span="18">
            <Input />
            <ForecastContents />
            <p>
              Created by Marc Erwin <br />
              a.k.a Trí Nghĩa
            </p>
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
