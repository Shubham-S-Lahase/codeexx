import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signupPage/SignUp"
import Login from "./components/loginPage/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={ <Login/> } />
          <Route path="/signup" element={ <SignUp/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
