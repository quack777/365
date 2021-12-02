import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toggle_unselected from "../images/toggle_unselected.png";
import toggle_selected from "../images/toggle_selected.png";
import axios, { Axios } from 'axios';

import './Write.css';

function Write () {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();
  const year = NewDate.getFullYear();

  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  function writeSubmit(e) {
    e.preventDefault();
    console.log(answer)
    const inputValue = e.target[0].value;
    e.target[0].value = "";
    console.log("submit");
    setCount(0);
    setAnswer("");
    axios.post('http://localhost:5000/register', {
      name : answer,
      password : "12345"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function inputCount(e) {
    const inputValue = e.target.value;
    let count = inputValue.length;
    // 한글이랑 영어 카운터 다름 해결필요
    setAnswer(inputValue);
    console.log(answer)
    setCount(count);
  }

  function stateClose() {
    setOpen(true)
  }

  function stateOpen() {
    setOpen(false)
  }

  function sendData() {
    console.log(answer)
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
        <textarea onInput={inputCount} maxLength="200"></textarea>
        <p>{count}/200</p>
        <div>
          <div className="private">
            {open ? <img src={toggle_selected} onClick={stateOpen}></img> : <img src={toggle_unselected} onClick={stateClose}></img>}
          </div>
          <div className="twoBtn">
            <Link to="/"><p id="first">작성취소</p></Link>
            <button type="submit" id="second" onClick={sendData}>저장하기</button>
            {/* <Link to="/list"><p id="second" onClick={sendData}>저장하기</p></Link> */}
          </div>
        </div>
      </form>
    </div>
  )
}
export default Write;