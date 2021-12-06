import React from "react";
import { useEffect, useRef, useState } from "react";
import loginImage from "../images/loginImage.png";
import rigthArrow from '../images/Vector 1.png';
import kakao from '../images/kakao.png';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from "axios";

function Login () {
  const box = useRef();
  const[num, setNum] = useState(0)
  const number_ref = useRef(0);

  // function repeat() {
  //   if(num === 0 ) {
  //     setInterval(move, 2000);
  //   }
  // }

  // function move() {
  //   number_ref.current -= 100;
  //   setNum(number_ref.current);
  //   console.log(num)
  //   console.log(box.current.style.transform)
  //   box.current.style.transform = `translateX(${num}%)`;
  // }

  // useEffect(() => {
  //   const move = setInterval(() => {
  //     number_ref.current -= 100;
  //     setNum(number_ref.current);
  //     console.log(num)
  //     console.log(box.current.style.transform)
  //     box.current.style.transform = `translateX(${num}%)`;
  //   }, 2000);
  // }, [])


  function kakaoLogin() {
    axios(
      {
        url: '/login/getKakaoAuthUrl',
        method: 'get',
        baseURL: 'http://61.72.99.219:9130',
        //withCredentials: true,
      }
    ).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return(
    <div className="Login">
      <section>
        <img src={loginImage}></img>
        <p>어떤 설명 사이트에 대한 설명</p>
        <div className="overflow">
          <div className="box" ref={box}>
            <p>어떤 설명 사이트에 대한 설명이 들어갑니다 어떤 설명 사이트에 대한 설명이 들어갑니다 어떤 설명 사이트에 대한 설명이 들어감</p>
            <p>스우파 너무 재밌어요 스우파 너무 재밌어요 스우파 너무 재밌어요 스우파 너무 재밌어요스우파 너무 재밌어요</p>
            <p>홀리뱅뱅뱅애배애배애배애밸야ㅓ래냠러ㅐ;ㅁ너래;ㅇㄴㅁ러ㅐㄴ;ㅑ머랜랴머</p>
            <p>안녕하세요 조은총입니다 조은총입니다 조은총입니다 조은총입니다조은총입니다조은총입니다</p>
          </div>
        </div>
        {/* <div>
          <img src={rigthArrow}></img>
          <img src={rigthArrow}></img>
        </div> */}
      </section>
      <section>
        <p>로그인</p>
        <p>카카오톡 계정으로 1초 안에 로그인하세요.</p>
        <div className="button">
          <img src={kakao}></img>
          <p onClick={kakaoLogin}>카카오톡으로 계속</p>
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