import React, { useState, useEffect } from "react";
import "./App.css";
import "./switcher.scss";
function App() {
  const [colorTheme, setColorTheme] = useState("theme-white");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };
  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <div
          id="theme-white"
          onClick={() => handleClick("theme-white")}
          className={`${colorTheme === "theme-white" ? "active" : ""}`}
        />
        <div
          id="theme-blue"
          onClick={() => handleClick("theme-blue")}
          className={`${colorTheme === "theme-blue" ? "active" : ""}`}
        />
        <div
          id="theme-orange"
          onClick={() => handleClick("theme-orange")}
          className={`${colorTheme === "theme-orange" ? "active" : ""}`}
        />
        <div
          id="theme-purple"
          onClick={() => handleClick("theme-purple")}
          className={`${colorTheme === "theme-purple" ? "active" : ""}`}
        />
        <div
          id="theme-green"
          onClick={() => handleClick("theme-green")}
          className={`${colorTheme === "theme-green" ? "active" : ""}`}
        />
        <div
          id="theme-black"
          onClick={() => handleClick("theme-black")}
          className={`${colorTheme === "theme-black" ? "active" : ""}`}
        />
      </div>
      <div className="content-box">
        <h3>Multiple Themes</h3>
        <h5>VachanOnline.com</h5>
        <p>
          VachanOnline.com and the companion VachanGo app is a premier Scripture
          Engagement website in Indian Languages! So what is Scripture
          engagement? It is a way of studying the Bible with resources and tools
          to assist you understand the Bible. With a host of commentaries,
          videos, audio Bibles and reading plans in your heart language, our
          desire is that you will find this website to be a place where you can
          interact with Scripture, find resources to understand it, journal your
          spiritual growth and enjoy developing a growing relationship with God.
          The VachanGo companion app enables you take your Bible and your Notes
          with you wherever you go!
        </p>
      </div>
    </div>
  );
}

export default App;
