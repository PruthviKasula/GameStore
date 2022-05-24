import React, { useState,useContext } from "react";
import UserContext from '../pages/User.js';
import LogContext from '../pages/Log.js';
import "./login.css";
import "./Home.css";


function LogOut(){

const user = useContext(UserContext);
const authenticated= useContext(LogContext);
const logout = () => {
  authenticated.state =false;
  console.log(authenticated)
  user.name = "empty"
  user.shoppingList= ''
  user.checkoutItems=''
  user.totalFees= null
  window.location.href="http://localhost:3000/";
}

  return (
    <div className="login">
      <div className="loginForm">
      <h1 test_id_h2="1">Click here if you are sure to logout and refresh the page </h1>        
        <button test_button_id ="6" onClick={logout}> Logout </button>
      </div>
    </div>

  );
};
export default LogOut;