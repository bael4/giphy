import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <div className="App"> 
    <NavBar/>
    <AppRouter/>
    </div>
  );
};

export default App;
