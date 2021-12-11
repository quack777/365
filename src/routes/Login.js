import React from "react";
import { useEffect, useRef, useState } from "react";
import loginImage from "../images/loginImage.png";
import rigthArrow from '../images/Vector 1.png';
import kaka from '../images/kakao.png';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import axios from "axios";
import { KAKAO_AUTH_URL } from "./OAuth";

const {Kakao} = window;

function Login () {

  const box = useRef();
  const [num, setNum] = useState(0)
  const number_ref = useRef(0);
  const [days, setDays] = useState();
  const [code, setCode] = useState();

  useEffect(() => {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay) + 1;
    setDays(day)
    console.log(days)
  },[])

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


  const history = useHistory()

  function kakaoLogin() {
    axios(
      {
      url: "/login/getKakaoAuthUrl",
      method: "get",
      baseURL: "http://61.72.99.219:9130"
      }
      ).then(function (response) {
        console.log(response.data);
        setCode(response.data);
        window.location.href = `${response.data}`;
      }).then(function () {
        console.log("aa");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function move(response) {
    let codea = new URL(window.location.href).searchParams.get("code");
    console.log(codea);
    axios(
    {
      url: `${response}`,
      method: 'get',
      baseURL: 'http://61.72.99.219:9130',
      //withCredentials: true,
    }
    ).then(function (response) {
      console.log(response);
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
          <img src={kaka}></img>
          <a href={KAKAO_AUTH_URL}><p>카카오톡으로 계속</p></a>
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