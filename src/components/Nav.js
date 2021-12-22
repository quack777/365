import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    setNickname(sessionStorage.getItem("nickname") || "");
    return () => {};
  }, []);

  return (
    <div className="Nav">
      <Link to="/365">
        <p id="logo">365</p>
      </Link>
      <div id="nav_btn">
        <Link to="/introduce">
          <p className={location.pathname === "/introduce" ? "bctive" : ""}>
            소개
          </p>
        </Link>
        <Link to="/list">
          <p className={location.pathname === "/list" ? "bctive" : ""}>
            내 일기장
          </p>
        </Link>
        <Link to="/trash">
          <p className={location.pathname === "/trash" ? "bctive" : ""}>
            휴지통
          </p>
        </Link>
        {nickname ? (
          <Link to="/logout">
            <p>로그아웃</p>
          </Link>
        ) : (
          <Link to="/login">
            <p className={location.pathname === "/login" ? "bctive" : ""}>
              로그인/회원가입
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
