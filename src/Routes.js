import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./components/pages/women-page";
import Men from "./components/pages/men-page";
import Kids from "./components/pages/kids-page";
import HomePage from "./components/pages/home-page";

export default class MainRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
    );
  }
}
