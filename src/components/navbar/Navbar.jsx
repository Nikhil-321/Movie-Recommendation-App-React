import React, { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"))
  const logout = () => {
    localStorage.removeItem("loggedinUser")
    setState(prev => !prev)
    navigate("/login")
  }

  const login = () => {
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to={"/"}><i className="fa fa-star me-2" />Movies Recommendation App</NavLink>
            <button onClick={loggedinUser ? logout : login} className="navbar-brand bg-danger btn">{loggedinUser? "Logout": "Login"}</button>
        </div>
        <h6 className="text-white me-3 mt-1">{loggedinUser?.name}</h6>

      </nav>
    </>
  );
};

export default Navbar;
