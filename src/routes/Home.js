import React from 'react';
import VectorLeft from '../images/Vector left.png'
import VectorRight from '../images/Vector right.png'
import Vector from '../images/Vector 1.png'
import './Home.css'

function Home () {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();
  return(
    <div className="Home">
      <div className="questions">
        <p>{month}월 {date}일</p>
        <div>
          <img src={VectorLeft} alt="vectorLeft"></img>
          <p>나의 삶의 목적은 무엇인가요?</p>
          <img src={VectorRight} alt="vectorRight"></img>
        </div>
      </div>
      <div className="answers">
        <img></img>
        <div className="answer">
          <p>보송보송한 아메리카 앵무새</p>
          <p>답변 받아올 곳</p>
        </div>
        <div className="answer">
          <p>보송보송한 아메리카 앵무새</p>
          <p>axios get data</p>
        </div>
        <img></img>
      </div>
      <button id="goWriteBtn">
        <p>오늘 나의 생각 남기기</p>
        <img src={Vector} alt="vector"></img>
      </button>
    </div>
  )
}

export default Home;