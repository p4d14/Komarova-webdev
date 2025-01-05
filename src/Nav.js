import React from "react";
import { Routes, Route, BrowserRouter, Link, Navigate } from "react-router-dom";
import "./styles.css";
import Comic from './pages/Comic.js';
import Home from './pages/Home.js';
import Survey from './pages/Survey.js';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comic" element={<Comic />} />
        <Route path="/Survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
    );
};

export default Navigation;
