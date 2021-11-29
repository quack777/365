import React from "react";
import signupImage from "../images/signupImage.png";
import rigthArrow from '../images/Vector 1.png';
import './SingUp.css'

function Sign() {
  return(
    <div className="SignUp">
      <section>
        <img src={signupImage}></img>
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
        <form>
          <input type="text" required></input>
          <input type="password" required></input>
          <p>카카오계정저장</p>
          <p>로그인</p>
        </form>
      </section>
    </div>
  )
}

export default Sign;