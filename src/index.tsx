import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.scss";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import ProjectCard from "./Components/ProjectCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation />
    <Content />
    <div className={styles.projectCards}>
      <ProjectCard linkTo="" cardCaption={"lol"} src={"/logo192.png"} />
      <ProjectCard linkTo="" cardCaption={"lol"} src={"/logo192.png"} />
      <ProjectCard linkTo="" cardCaption={"lol"} src={"/logo192.png"} />
      <ProjectCard linkTo="" cardCaption={"lol"} src={"/logo192.png"} />
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
