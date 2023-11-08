import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();

  return (
    !isAuthenticated &&( 
    <button  className="category-btn" style={{color:'#fff', border:"1px solid white"}} onClick={() => loginWithRedirect()}>
      Log In
      </button>
    )
  )
};

export default LoginButton;