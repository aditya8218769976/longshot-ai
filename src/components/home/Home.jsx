import React, { useState } from "react";
import "../home/Home.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const passwordHandler = (e) => {
    setSuccessMessage("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const rotateHandler = (e) => {
    e.preventDefault();

    // checking if password is valid or is true//

    if (password === "adi") {
      setSuccessMessage("Welcome");
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/welcome");
      }, 3000);
    } else {
      setPasswordError("Please fill correct password");
    }
  };
  const loggedIn = window.localStorage.getItem("logout");
  console.log(loggedIn, "loggedIn...");
  return (
    <div>
      <div
        className={isLoggedIn ? "door-left door-left-animation" : "door-left"}
      ></div>
      <div className="door-middle-container">
        <div
          className={isLoggedIn ? "rotate-style door-middle" : "door-middle"}
        >
          <div className="door-middle-h2">
            <h2 className="text-center">fingerprint Icon</h2>
          </div>

          <div className="door-middle-form">
            {successMessage && (
              <div className="success-msg">{successMessage}</div>
            )}
            <label className="text-center" htmlFor="password">
              ENTER YOUR PILEARNING PASSWORD
            </label>

            <input
              onChange={passwordHandler}
              value={password}
              className="password-input"
              type="password"
              required
            />
            {passwordError && <div className="error-msg">{passwordError}</div>}

            <div className="actions">
              {!isLoggedIn && (
                <Link
                  to="welcome"
                  onClick={rotateHandler}
                  className="login-btn"
                >
                  Enter Lab
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isLoggedIn ? "door-right door-right-animation" : "door-right"
        }
      ></div>
    </div>
  );
};

export default Home;
