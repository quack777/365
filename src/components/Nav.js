import React from "react";
import './Nav.css';

function Nav() {
  return(
    <div className="Nav">
      <p id="logo">365</p>
      <div id="nav_btn">
        <p>소개</p>
        <p>내 일기장</p>
        <p>휴지통</p>
        <p>로그아웃</p>
      </div>
    </div>
  )
}

export default Nav;