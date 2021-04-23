import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/accountActions";

const RegisterBox = ({ onRegister }) => {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const [registrationDetails, setRegistrationDetails] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });

  const handleFirstnameChange = (e) => {
    e.preventDefault();

    setRegistrationDetails({
      ...registrationDetails,
      firstname: e.target.value,
    });
  };

  const handleLastnameChange = (e) => {
    e.preventDefault();
    setRegistrationDetails({
      ...registrationDetails,
      lastname: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setRegistrationDetails({
      ...registrationDetails,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setRegistrationDetails({
      ...registrationDetails,
      password: e.target.value,
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();

    console.log(registrationDetails);
    onRegister(registrationDetails);
  };

  return (
    <div className="inner-container">
      <div className="header">Register</div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">
            FirstName{registrationDetails.firstname}
          </label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={(e) => handleFirstnameChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">LastName</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={(e) => handleLastnameChange(e)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email{email}</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Email"
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
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <button
          type="button"
          className="login-btn"
          onClick={(e) => submitRegister(e)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (registrationDetails) => dispatch(signUp(registrationDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBox);
