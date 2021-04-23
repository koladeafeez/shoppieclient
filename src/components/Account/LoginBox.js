import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions/accountActions";
import "./style.css";

const LoginBox = ({ onLogin, data }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const saveToken = async () => {
    try {
      if (!data) return;
      let token = await data.accessToken;
      console.log(token);
      localStorage.setItem("token", token);
    } catch (e) {
      console.log(e);
    }
  };

  saveToken();

  const [loginDetails, setLoginDetails] = useState({
    email: email,
    password: password,
  });

  const handleEmailChange = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);
    setLoginDetails({
      ...loginDetails,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);
    setLoginDetails({
      ...loginDetails,
      password: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // setLoginDetails()
    console.log("loginData", loginDetails);
    onLogin(loginDetails);
  };

  // const submitLogin = (e) => {};

  return (
    <div className="inner-container">
      <div className="header">Login</div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>

        <button
          type="button"
          className="login-btn"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.auth.auth);
  return {
    data: state.auth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (registrationDetails) => dispatch(logIn(registrationDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
