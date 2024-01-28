import React from "react";
import "../styles/welcome.scss";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcomeCard">
        <div className="welcomeCardWrap">
          <h2>Welcome to Steamflix</h2>
          <p>
            For testing purposes you have been awarded <b>500 coins</b>
          </p>
          <p>isn't that amazing ?</p>
          <p>
            <b>spoiler alert!</b> yes it is
          </p>
          <div className="buttons">
            <button className="welcomeBtn">claim</button>
            <button className="welcomeBtn">don't claim :/</button>
          </div>
          <p>
            before continuing make sure you agree to{" "}
            <Link to={"/terms"}>terms</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
