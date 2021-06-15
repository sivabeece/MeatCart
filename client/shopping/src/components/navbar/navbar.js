import React, { useReducer, useEffect, useState } from "react";
import "./navbar.css";
import { Icon, Modal, Button, Image } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ModalReducer } from "../../shared/common";
import { useGoogleLogin } from "react-google-login";
import { setUserDetails } from "../../redux/actions/productActions";
import { CommonProperties } from "../../shared/common";

export default function Navbar() {
  const clientId =
    "988445299950-7ohtn6gt7ohummqje0sq61maor1hd7nk.apps.googleusercontent.com";
  const mycart = useSelector((state) => state.mycartItems.myCarts);
  const { email, givenName } = useSelector((state) => state.userData.userInfo);
  const [userName, setUserName] = useState("user");

  const [state, dispatch] = useReducer(ModalReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  const userInfoDispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch({ type: "CLOSE_MODAL" });
    userInfoDispatch(setUserDetails(res.profileObj));
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  useEffect(() => {
    setUserName(givenName);
  }, [email]);

  return (
    <header>
      <h2 className="logo">Fish&Meat</h2>
      <input type="checkbox" id="toggler" className="toggler" />
      <label htmlFor="toggler" className="burger">
        <Link to={"/viewcart"} className="deskcart">
          <Icon name="opencart" />
          <span className="cartcount">{mycart.length}</span>
        </Link>
        <span>
          <Icon name="bars" />
        </span>
      </label>
      <nav>
        <span className="username">Hi {userName}</span>
        <ul>
          <li>
            <a
              href="#"
              onClick={() =>
                dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })
              }
            >
              Login
            </a>
          </li>
          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/viewcart"}>
              <Icon name="opencart" />
              <span className="cartcount">{mycart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Use Google's SignIn</Modal.Header>
        <Modal.Content>
          <Button fluid onClick={signIn} className="googlebutton">
            <Image className="imglogin" src="google.png" />
          </Button>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </header>
  );
}
