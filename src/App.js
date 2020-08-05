import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Corner from "./components/Corner";
import Input from "./components/Input";
import ForecastContents from "./components/ForecastContents";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Corner />
        <Input />
        <ForecastContents />
        <p>
          Created by Jakob Mathieu <br />
          a.k.a Trí Nghĩa
        </p>
      </div>
    </Provider>
  );
}

export default App;
