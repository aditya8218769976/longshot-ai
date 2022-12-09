import React from "react";
import Timer from "../timer/Timer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../main/Welcome.css";
const Welcome = () => {
  const [logout, setLogout] = useState("");
  const navigate = useNavigate();

  const abc = window.localStorage.getItem("minutes", "seconds");

  const logOutHandler = () => {
    setLogout(window.localStorage.setItem("logout", true));

    navigate("/");
  };
  return (
    <div className="main-style">
      <Timer />
      <div className="link-style">
        {!logout && abc ? (
          <button type="submit" onClick={logOutHandler}>
            LogOut
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
