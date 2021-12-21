<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  const [active, setActive] = useState([0, 0, 0, 0]);

  function selectPath(pathname) {
    console.dir(pathname.target.textContent);
    if(pathname.target.textContent === "소개") {
      const copy = [1, 0, 0, 0];
      setActive(copy);
    } else if (pathname.target.textContent === "내 일기장") {
      const copy = [0, 1, 0, 0];
      setActive(copy);
    } else if (pathname.target.textContent === "휴지통") {
      const copy = [0, 0, 1, 0];
      setActive(copy);
    } else if (pathname.target.textContent === "로그인/회원가입") {
      const copy = [0, 0, 0, 1];
      setActive(copy);
    }
  } 
  
  function mainClick() {
    setActive([0, 0, 0, 0]);
  }
  return(
    <div className="Nav">
      <Link to="/365"><p id="logo" onClick={mainClick}>365</p></Link>
      <div id="nav_btn" onClick={selectPath}>
        <Link to="/introduce">{active[0] === 1 ? <p className="bctive">소개</p>:<p>소개</p>}</Link>
        <Link to="/list">{active[1] === 1 ? <p className="bctive">내 일기장</p> :<p>내 일기장</p>}</Link>
        <Link to="/trash">{active[2] === 1 ? <p className="bctive">휴지통</p> :<p>휴지통</p>}</Link>
        <Link to="/login">{active[3] === 1 ? <p className="bctive">로그인/회원가입</p> :<p>로그인/회원가입</p>}</Link>
      </div>
    </div>
  )
}

export default Nav;
=======
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
>>>>>>> 79815462ce8030b6d4a0231ddceae70c6603fcb4
