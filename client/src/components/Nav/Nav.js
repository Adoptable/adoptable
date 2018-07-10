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
      <div className="navbar-left">
        <a href="/signup">
          <div className="navbar-brand">
            <a href="/signup"><h4 className="postPet">Sign up</h4></a>
          </div>
        </a>
        <a href="/login">
          <div className="navbar-brand">
            <a href="/login"><h4 className="postPet">Login</h4></a>
          </div>
        </a>
      </div>
      <a className="title" href="/">
        <h2 className="header">Adoptable</h2>
      </a>
      <div className="navbar-right">
        <a href="/adoptionpage">
          <div className="navbar-brand">
            <a href="/adoptionpage"><h4 className="postPet">Add a Pet</h4></a>
          </div>
        </a>
        <a href="/aboutUs">
          <div className="navbar-brand">
            <a href="/aboutUs"><h4 className="postPet">About Us</h4></a>
          </div>
        </a>
      </div>
  </nav>

);

export default Nav;
