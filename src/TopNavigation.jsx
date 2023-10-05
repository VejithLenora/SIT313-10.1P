import React from "react";
import { Link } from 'react-router-dom';

function TopNavigation() {
  return (
      <>
        <nav className="topnav" style={{border:1, borderColor:'red', top:5}}>
          <Link to="/">DevLink MarketPlace</Link>
          <Link to="/find-dev">Find Dev</Link>
          <Link to="/find-jobs">Find Jobs</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
        </nav>
      </>
  );
}

export default TopNavigation;
