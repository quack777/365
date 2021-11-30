import React from 'react';
import { useState, useRef, useEffect } from 'react';
import VectorLeft from '../images/Vector left.png';
import VectorRight from '../images/Vector right.png';
import Vector from '../images/Vector 1.png';
import './Home.css';
import { Link } from 'react-router-dom';


function Home () {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();

  const [answer8, setAnswer8] = useState(["대답1", "나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 이게 200자일 때 모습입니다~", "대답3", "대답4", "대답5", "대답6", "대답7", "대답8"]);
  const [ranname, setRanname] = useState(["뽀로로", "라치카", "시미즈", "리안", "리헤이", "허니제이", "스우파", 8]);
  const [num, setNum] = useState(0);

  const answersBox = useRef() 
  function leftMove() {
    if(num >= -300){
      console.log(answersBox.current.style.transition);
      setNum(num-30);
      answersBox.current.style.transform = `translateX(${num}%)`;
    }
  }

  function rightMove() {
    if(num <= 30){  
      setNum(num+30);
      answersBox.current.style.transform = `translateX(${num}%)`;
    }
  }

  useEffect(() => {
    // answersBox.current.style.transform = `traslateX(${num}%)`;
  }, [])

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
      {/* <div className="answers">
        <div className="answer">
          <p>보송보송한 아메리카 앵무새</p>
          <p>답변 받아올 곳</p>
        </div>
        <div className="answer">
          <p>보송보송한 아메리카 앵무새</p>
          <p>axios get data</p>
        </div>
      </div> */}
      <div className="overflow">
        <div className="Aanswers" ref={answersBox}>
          {answer8.map((answer, index) => {
            return(
              <div className="Aanswer">
                <p>{ranname[index]}</p>
                <p>{answer}</p>
              </div>
            )
          })}
        </div>
        <div className="btnBox">
          <button onClick={leftMove}>왼쪽이동</button>
          <button onClick={rightMove}>오른쪽이동</button>
        </div>
      </div>
      <Link to="/write">
        <button id="goWriteBtn">
          <p>오늘 나의 생각 남기기</p>
          <img src={Vector} alt="vector"></img>
        </button>
      </Link>
    </div>
  )
}

export default Home;