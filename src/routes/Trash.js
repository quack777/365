import React, { useEffect, useState } from "react";
import './Trash.css';
import delete_normal from '../images/delete_normal.png';
import restore_normal from '../images/restore_normal.png';
import Line from '../images/Line45.png';
import axios from "axios";

function Trash() {
  const [member, setMember] = useState();
  const [trashAllData, setTrashAlldata] = useState(["answer"]);
  const a = [
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2022",
      answer : "똥1"
    },
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2021",
      answer : "똥1"
    },
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2020",
      answer : "똥1"
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2022",
      answer : "똥2"
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2021",
      answer : "똥2"
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2020",
      answer : "똥2"
    }
  ]

  useEffect(() => {
    const member_num = localStorage.getItem('member_num');
    console.log(member_num)
    setMember(Number(member_num));
    axios(
      {
      url : "/trashes/6", // /trashes/{member_num}
      method : "get",
      baseURL : "http://61.72.99.219:9130"
    }
    ).then(function(response) {
      console.log(response.data);
      setTrashAlldata(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  function allClear() {
    axios(
      {
        url : "/trashes/all",
        method : "delete",
        baseURL : "http://61.72.99.219:9130",
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function oneRemove(index) {
    console.log(index);
    const answer_num = trashAllData[index].answer_num;
    axios(
      {
        url : `/trashes/${answer_num}`, // /trashes/{answer_num}
        method : "delete",
        baseURL : "http://61.72.99.219:9130"
    }
    ).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  function revert(index) {
    console.log(index);
    const answer_num = trashAllData[index].answer_num;
    axios(
      {
        url : `/trashes/settings/${answer_num}/${member}`, // /trashes/settings/{answer_num}/{member_num}
        method : "patch",
        baseURL : "http://61.72.99.219:9130"
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return(
    <div className="Trash">
      <div>
        <p>휴지통</p>
        <p onClick={allClear}>휴지통 비우기</p>
      </div>
      <p>휴지통에 있는 일기는 7일이 지나면 완전히 삭제됩니다</p>
      <section>
        {/* <div>
          <hr></hr>
          <div className="question">
            <p>11월 20일</p>
            <p>나의 삶의 목적은 무엇인가요?</p>
          </div>
          <div className="answers">
            <p>2021년의 나:</p>
            <p>나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 나의 답변은 이렇다 나는 이렇게 생각하고 저렇게 생각한다 나는 이러쿵 저러쿵 200자 일 때 모습입니다</p>
          </div>
          <div className="btns">
            <img onClick={revert} src={restore_normal}></img>
            <img src={Line}></img>
            <img onClick={oneRemove} src={delete_normal}></img>
          </div>
        </div> */}
        {trashAllData.map((data, index) => {
          return(
            <div>
              <hr></hr>
              <div className="question">
                <p>{data.answer_date && data.answer_date.substring(0,2)}월 {data.answer_date && data.answer_date.substring(2,4)}일</p>
                <p>{data.question_num}으로 질문 api호출해야함</p>
              </div>
              <div className="answers">
                <p>{data.answer_year}년의 나:</p>
                <p>{data.answer}</p>
              </div>
              <div className="btns">
                <img onClick={() => revert(index)} src={restore_normal}></img>
                <img src={Line}></img>
                <img onClick={() => oneRemove(index)} src={delete_normal}></img>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Trash