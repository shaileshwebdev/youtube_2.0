import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,isAuthenticated } = useAuth0();

  return (
    isAuthenticated &&( 
    <button className="category-btn" style={{color:'#fff', border:"1px solid white"}} onClick={() => logout()}>
      Logout
      </button>
    )
  )
};

export default LogoutButton;