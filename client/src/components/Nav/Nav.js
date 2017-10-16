import React from "react";
import "./Nav.css";
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
  alert("You are logged in")
}  
const fail = (response) => {
  alert("Please try again")
}
const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
      <div className="navbar-brand">
        <a href="/signup"><h4 className="postPet">Sign up</h4></a>
      </div>
      <div className="navbar-brand">
        <a href="/login"><h4 className="postPet">Login</h4></a>
      </div>
      <a className="title" href="/">
        <h2 className="header">Adoptable</h2>
      </a>
      <a href="/adoptionpage">
        <div className="navbar-brand navbar-right">
          <a href="/adoptionpage"><h4 className="postPet rightSide">Post a Pet</h4></a>
        </div>
      </a>
      <a href="/aboutUs">
        <div className="navbar-brand navbar-right">
          <a href="/aboutUs"><h4 className="postPet rightSide">About Us</h4></a>
        </div>
      </a>
  </nav>

);

export default Nav;
