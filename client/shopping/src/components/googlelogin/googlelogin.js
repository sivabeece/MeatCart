import React, { useReducer, useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { Button, Image } from "semantic-ui-react";
import { ModalReducer } from "../../shared/common";
import "./googlelogin.css";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

export default function GoogleLoginComponent() {
  //   const dispatch = useDispatch();
  const [state, dispatch] = useReducer(ModalReducer, {
    open: false,
    dimmer: undefined,
  });
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);

    setTimeout(() => {
      alert(
        `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
      );
      dispatch({ type: "CLOSE_MODAL" });
    }, 200);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };
  useEffect(() => {
    //     const { open, dimmer } = state;
  }, []);

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <Button fluid onClick={signIn} className="googlebutton">
      <Image className="imglogin" src="google.png" />
    </Button>
  );
}
