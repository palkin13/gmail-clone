import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import  {auth , provider} from "./firebase";
import { useDispatch } from "react-redux";
import {login} from "./features/userSlice";

function Login() {

const dispatch = useDispatch();

const signIn = () => {
auth
.signInWithPopup(provider)
.then(({user}) => {
dispatch(login({
    displayName : user.displayName,
    email : user.email,
    photoUrl : user.photoURL
  })
);
})
.catch((error) => alert(error.message));

};

return (
  <div className="login">
    <div className="login_container">
     <img src="http://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
     alt="gmail-logo" />

     <Button onClick={signIn}
     variant="contained"
     color="primary">
       Login
     </Button>

    </div>
   </div>
);
}


export default Login;