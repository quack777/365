import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return(
    <div className="Nav">
      <Link to="/365"><p id="logo">365</p></Link>
      <div id="nav_btn">
        <Link to="/write"><p>소개</p></Link>
        <Link to="/list"><p>내 일기장</p></Link>
        <Link to="/trash"><p>휴지통</p></Link>
        <Link to="/login"><p>로그인/회원가입</p></Link>
      </div>
    </div>
  )
}

export default Nav;