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

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [publica, setPublica] = useState("N");
  const [questionN, setQuestionN] = useState();

  function writeSubmit(e) {
    e.preventDefault();
    console.log(answer)
    const inputValue = e.target[0].value;
    e.target[0].value = "";
    console.log("submit");
    setCount(0);
    setAnswer("");

    const now = new Date();
    const year = now.getFullYear();
    const date = now.getDate(); 
    axios.patch('http://61.72.99.219:9130/answers/pages/22/2', {
      // answer_year : "2021",
      // answer_date : "1207",
      // answer : answer,
      // public_answer : "Y",
      // question_num : 342,
      // member_num : 1,
      // answer_delete : null
      answer : "군고구마가 더 좋은것같기도,,",
      public_answer : "Y",
      answer_num : 22,
      member_num : 2
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
    setPublica("N")
  }

  function stateOpen() {
    setOpen(false)
    setPublica("Y")
  }

  function sendData() {
    console.log(answer)
  }

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay) + 1;
    axios(
      {
        url: `/question/${day}`,
        method: 'get',
        baseURL: 'http://61.72.99.219:9130',
        //withCredentials: true,
      }
      ).then(function (response) {
        console.log(response.data);
        setQuestion(response.data.question);
        setQuestionN(response.data.question_num);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return(
    <div className="Write">
      <div className="questions">
        <p>{month}월 {date}일, {year}</p>
        <div>
          <p>{question}</p>
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