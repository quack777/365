import React from "react";
import './Introduce.css';
import Introduce_top from '../images/07.png';
import ballon from '../images/Group 5582.png';
import { Link } from 'react-router-dom';
function Introduce() {
  return(
    <div className="Introduce">
      <section className="top">
        <p>365 소개</p>
        <p>3년동안 365개의 질문에 대한 답변을 관리할 수 있는웹, 앱 다이어리 서비스입니다</p>
      </section>
      <hr></hr>
      <img src={Introduce_top}></img>
      <section className="second">
        <p>365개의 질문, 그리고 나와 나를 연결할 기록들.</p>
        <img src={ballon}></img>
        <p>생각해보신적이 있나요? 매일 달라지는 질문에 답해 보세요. 사소하지만 큰 기록은 분명 당신과 당신을  이어주는 고리가 될거에요. 3년동안의 기록을 차곡차곡 모으고, 날짜별로 내 답변을 보면서 찬찬히 나를 만나봐요. 당신이 당신을 만날수 있도록 저희 365가 도와드릴게요. </p>
      </section>
      <hr></hr>
      <section className="casual">
        <p>365 알차게 사용하기</p>
        <div className="이미지 넘기기"></div>
        <div>
          <p>회원가입/로그인</p>
          <p>카카오로 간편하게 회원가입과 로그인을 할 수 있어요.</p>
        </div> 
      </section>
      <section className="goHome">
        <p>“나와 나를 연결할 준비, 되셨나요?”</p>
        <Link to="/365">
          <p>365 시작하기</p>
        </Link>
      </section>
      <section>
        <p>만든 사람들</p>
        <div className="이미지 들어갈곳"></div>
      </section>
    </div>
  )
}

export default Introduce;