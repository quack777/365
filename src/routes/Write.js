import React from "react";
import { useState } from "react";
import './Write.css';

function Write () {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();
  const year = NewDate.getFullYear();

  const [answer, setAnswer] = useState();
  const [count, setCount] = useState(0);
  function writeSubmit(e) {
    e.preventDefault();
    const inputValue = e.target[0].value;
    e.target[0].value = "";
    setAnswer(inputValue);
    setCount(0);
  }

  function inputCount(e) {
    const inputValue = e.target.value;
    let count = inputValue.length;
    // 한글이랑 영어 카운터 다름 해결필요
    setCount(count);
  }
  return(
    <div className="Write">
      <div className="questions">
        <p>{month}월 {date}일, {year}</p>
        <div>
          <p>나의 삶의 목적은 무엇인가요?</p>
        </div>
      </div>
      <form onSubmit={writeSubmit} className="writeBox">
        <div className="writeInputBox">
          <input onInput={inputCount} maxLength="199"></input>
          <p>{count}/200</p>
        </div>
        <div>
          <button>작성취소</button>
          <button>저장하기</button>
        </div>
      </form>
    </div>
  )
}
export default Write;