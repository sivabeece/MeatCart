import React, { useState } from "react";
import "./login.css";
import { Icon, Image, Button, Input } from "semantic-ui-react";
import login from "../../images/login_1.png";
import meatlogo from "../../images/logo.png";
import {
  SuccessToast,
  ErrorToast,
  maxLengthCheck,
} from "../../utils/ProjectToast";
import { ToastContainer } from "react-toastify";

type loginProps = {
  mobileNo: any;
  otp?: number;
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<loginProps>({
    mobileNo: "",
    otp: undefined,
  });

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (loginInfo?.mobileNo?.length < 10) {
      // send otp
      // SuccessToast("OTP sent successfully");
    }
  };

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="wrap d-md-flex">
            <Image className="login-image" src={login}></Image>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex d-f-d-c d-f-c">
              <div className="w-100">
                  <h3 className="mb-4">Sign In / Sign Up</h3>
                </div>
                <div className="logo_container_logo">
                  <img src={meatlogo} width="110" alt="Logo" />
                </div>
                
              </div>
              <form action="#" className="signin-form">
                <div className="form-group mb-3">
                  <label className="label">Mobile Number</label>
                  <Input
                    maxLength="10"
                    onChange={handleChange}
                    value={loginInfo.mobileNo}
                    onInput={maxLengthCheck}
                    icon="mobile alternate"
                    id="mobileNo"
                    name="mobileNo"
                    className="w-100"
                    type="number"
                    iconPosition="left"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label">OTP</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: 10 + "%", marginBottom: 5 + "%" }}
                >
                  <Button
                    content="Login"
                    icon="right arrow"
                    labelPosition="left"
                    color="black"
                    fluid
                    disabled={loginInfo?.mobileNo?.length < 10}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
