// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
      </div>
    );
  }
}
