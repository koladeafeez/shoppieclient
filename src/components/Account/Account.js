import React from "react";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";
import { useStyles } from "@material-ui/styles";
import { useState } from "react";

// const makeStyles = useStyles((theme) => {
//    showcase :{
//   display: none;
// }
// })

const Account = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const showLoginBox = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    // this.setState({ isLoginOpen: true, isRegisterOpen: false });
  };

  const showRegisterBox = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
    // this.setState({ isRegisterOpen: true, isLoginOpen: false });
  };

  return (
    <div className="root-container">
      <div className="boxtypeContainer">
        <div
          className={
            "controller " +
            "login " +
            (isLoginOpen ? "selected-controller" : "")
          }
          onClick={showLoginBox}
        >
          Login
        </div>
        <div
          className={
            "controller " +
            "register " +
            (isRegisterOpen ? "selected-controller" : "")
          }
          onClick={showRegisterBox}
        >
          Register
        </div>
      </div>
      <div className="box-container">
        {isLoginOpen && <LoginBox />}
        {isRegisterOpen && <RegisterBox />}
      </div>
    </div>
  );
};

export default Account;
