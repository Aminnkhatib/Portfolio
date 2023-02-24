import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import ProjectCard from "./Components/ProjectCard";
// import computerImage from "./Components/Illustrations/computerImage.svg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="rootBackground">
      <Navigation />
      <Content />
      <ProjectCard cardCaption={"lol"} src={"/logo192.png"} />
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
