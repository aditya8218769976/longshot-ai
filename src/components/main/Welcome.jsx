import React from "react";
import Timer from "../timer/Timer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../main/Welcome.css";
const Welcome = () => {
  const [logout, setLogout] = useState("");
  const navigate = useNavigate();

  const logOutHandler = () => {
    setLogout(window.localStorage.setItem("logout", true));

    navigate("/");
  };
  return (
    <div className="main-style">
      <Timer />
      <div className="link-style">
        {!logout && (
          <button type="submit" onClick={logOutHandler}>
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
