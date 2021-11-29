import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return(
    <div className="Nav">
      <Link to="/"><p id="logo">365</p></Link>
      <div id="nav_btn">
        <Link to="/write"><p>소개</p></Link>
        <Link to="/list"><p>내 일기장</p></Link>
        <Link to="/trash"><p>휴지통</p></Link>
        <p>로그아웃</p>
      </div>
    </div>
  )
}

export default Nav;