import "./style.css";
import { useState, useEffect } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Trending from "./Trending";
import Register from "./Register";
import Widgets from "./Widgets";

const App = () => {
  const [view, setView] = useState("HOME");

  switch (view) {
    case "HOME":
      return <Home setView={setView}/>;
    case "PROFILE":
      return <Profile setView={setView}/>;
    case "LOGIN":
      return (
        <Register setView={setView}/>
      );
    default:
      return <Trending setView={setView}/>;
      <Widgets/>
  }
};

export default App;
