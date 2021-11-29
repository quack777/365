import React from "react";
import loginImage from "../images/loginImage.png";
import rigthArrow from '../images/Vector 1.png';
import './Login.css';

function Login () {
  return(
    <div className="Login">
      <section>
        <img src={loginImage}></img>
        <p>어떤 설명 사이트에 대한 설명</p>
        <p>어떤 설명 사이트에 대한 설명</p>
        <div>
          <img src={rigthArrow}></img>
          <img src={rigthArrow}></img>
        </div>
      </section>
      <section>
        <p>로그인</p>
        <p>카카오톡 계정으로 1초 안에 로그인하세요.</p>
        <div className="button">
          <p>카카오톡으로 계속</p>
        </div>
        <div className="pp">
          <p>신규사용자이신가요?</p>
          <p>카카오 회원가입하기</p>
        </div>
      </section>
    </div>
  )
}

export default Login;