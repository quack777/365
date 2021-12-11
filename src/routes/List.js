import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import './List.css';
import modify_normal from '../images/modify_normal.png';
import Line from '../images/Line45.png';
import monthBTN from '../images/monthBTN.png';
import delete_normal from '../images/delete_normal.png';
import xxxxx from '../images/xxxxx.png';
import Calendar from 'react-calendar';
import axios from "axios";
import Modify from "./Modify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';


function List() {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();

  const [ deletes , setDeletes ] = useState(false);
  const [ calender, setCalender ] = useState(false);
  const [ value, onChange ] = useState(new Date());
  const [ question, setQuestion] = useState("나의 삶의 목적은 무엇인가요?");
  const [ open, setOpen ] = useState(false);
  const [ answer, setAnswer ] = useState("나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 200자 일 때 모습입니다")
  const [startDate, setStartDate] = useState(new Date());
  const [dataAnswer, setDataAnswer] = useState();
  const [dataYear, setDataYear] = useState();


  const deleteModalContainer = useRef()
  function showDelete(e) {
    setDeletes(true);
  }

  function xDelete() {
    setDeletes(false);
  }

  function seeCalender() {
    setCalender(true);
  }

  function closeCanlender() {
    setCalender(false);
  }
  
  useEffect(() => {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay) + 1;
    axios(
      {
        url : `/answers/${day}/1`, // /answers/{question_num}/{member_num}
        method : "get",
        baseURL : "http://61.72.99.219:9130"
    }
    ).then(function(response) {
      console.log(response.data);
      const aa = response.data;
      const answer = aa.map(aa => {
        return(
          aa.answer
        )
      })
      console.log(answer);
      setDataAnswer(answer);
      const answer_year = aa.map(aa => {
        return(
          aa.answer_year
        )
      })
      console.log(answer_year);
      setDataYear(answer_year);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay) + 1;
    axios(
      {
        url: `/question/${day}`, // /question/{question_num}
        method: 'get',
        baseURL: 'http://61.72.99.219:9130',
        //withCredentials: true,
      }
      ).then(function (response) {
        console.log(response.data);
        setQuestion(response.data.question);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  function goTrash() {
    axios(
      { url : "/answers/trashes/{answer_num}/{member_num}", // /answers/trashes/{answer_num}/{member_num} 
        method : "patch",
        baseURL : "http://61.72.99.219:9130"
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  return(
    <div className="List">
      <div className="questions">
        <div>
          <p>{month}월 {date}일</p>
          <p>{question}</p>
        </div>
        <img src={monthBTN} onClick={seeCalender}></img>
      </div>
      <div className="list">
        <hr></hr>
        <div className="watch">
          <p>{dataYear}년의 나:</p>
          <p>{dataAnswer}</p>
        </div>
        <div className="buttons">
          <p>전체공개</p>
          <Link to="/modify">
            <div>
              <img src={modify_normal}></img>
            </div>
          </Link>
          <img src={Line}></img> 
          <div onClick={showDelete}>
            <img src={delete_normal}></img>
          </div>
        </div>
        {dataAnswer.map((an, index) => {
          return(
            <div>
            <hr></hr>
              <div className="watch">
                <p>{dataYear[index]}년의 나:</p>
                <p>{an}</p>
              </div>
              <div className="buttons">
                <p>전체공개</p>
                <Link to="/modify">
                  <div>
                    <img src={modify_normal}></img>
                  </div>
                </Link>
                <img src={Line}></img> 
                <div onClick={showDelete}>
                  <img src={delete_normal}></img>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {deletes ?
      (<div className="deleteModal" ref={deleteModalContainer}>
        <img onClick={xDelete} src={xxxxx}></img>
        <p>답변을 정말 삭제하시겠어요?</p>
        <p>삭제된 답변은 휴지통에 일주일 동안 보관됩니다</p>
        <section>
          <p onClick={goTrash}>삭제하기</p>
          <p onClick={xDelete}>취소하기</p>
        </section>
      </div>)
      : null}
      {calender ? 
      (<div className="calendar">
        <img src={xxxxx} onClick={closeCanlender}></img>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date)
            console.log(date)
            const now = date
            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now - start;
            const oneDay = 1000 * 60 * 60 * 24;
            const day = Math.floor(diff / oneDay) + 1;
            console.log(day);
            axios({
              url : `/question/calendars/${day}`,
              method : "get",
              baseURL: 'http://61.72.99.219:9130',
            }).then(function (response) {
              console.log(response.data);
              setQuestion(response.data.question);
            })
            .catch(function (error) {
              console.log(error);
            });
            axios(
              {
                url : `/answers/${day}/1`, // /answers/{question_num}/{member_num}
                method : "get",
                baseURL : "http://61.72.99.219:9130"
            }
            ).then(function(response) {
              console.log(response.data);
              const aa = response.data;
              const answer = aa.map(aa => {
                return(
                  aa.answer
                )
              })
              console.log(answer);
              setDataAnswer(answer);
              const answer_year = aa.map(aa => {
                return(
                  aa.answer_year
                )
              })
              console.log(answer_year);
              setDataYear(answer_year);
            })
            .catch(function (error) {
              console.log(error);
            });
          }}
          locale={ko}
          dateFormat="MM월 dd일"
          inline
        />
      </div>)
      : null }
    </div>
  )
}

export default List;