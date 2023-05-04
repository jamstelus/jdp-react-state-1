import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Page from "./components/Page";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <div className="Layout">
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/page">Page</Link>
            </li>
          </ul>
        </nav>
        <div className="Content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
