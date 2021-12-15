import React, { useEffect, useState } from "react";
import './Trash.css';
import delete_normal from '../images/delete_normal.png';
import restore_normal from '../images/restore_normal.png';
import Line from '../images/Line45.png';
import axios from "axios";
import xxxxx from '../images/xxxxx.png';

function Trash() {
  const [member, setMember] = useState();
  const [trashAllData, setTrashAlldata] = useState(["answer"]);
  const setData = [
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2022",
      answer : "똥1",
      answer_num : 1
    },
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2021",
      answer : "똥1",
      answer_num : 2
    },
    { question_num : "344",
      answer_date : "1209",
      answer_year : "2020",
      answer : "똥1",
      answer_num : 3
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2022",
      answer : "똥2",
      answer_num : 4
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2021",
      answer : "똥2",
      answer_num : 5
    },
    { question_num : "343",
      answer_date : "1208",
      answer_year : "2020",
      answer : "똥2",
      answer_num : 6
    },
    { qustion_num : "342",
      answer_date : "1207",
      answer_year : "2022",
      anwer : "나는 엄마....... 왜냐하면 엄마는 크게 뭔가를 해주는 티를 내지는 않지만 매번 알게 모르게 날 챙겨주니까. 어릴땐 엄마 잔소리가 마냥 싫었는데, 이젠 그 잔소리에서 사랑이 뚝뚝 떨어진다는 사실을 나는 알아버렸으니까. 아빠 미안해 ^^ 조만간 부모님을 뵈러 본가에 가야겠다. 부모님이 좋아하는 떡이랑 과일 사들고 가야지.",
      answer_num : 7
    }
  ]

  useEffect(() => {
    const member_num = localStorage.getItem('member_num');
    console.log(member_num)
    setMember(Number(member_num));
    axios(
      {
      url : "/trashes/6", // 실제 => `/trashes/${member_num}`
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

  function oneRemove(answer_num) {
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

  function revert(answer_num) {
    setTrashAlldata(trashAllData.filter(data => data.answer_num !== answer_num)); // 실제에서는 api 성공하면이니까 .then안에
    axios(
      {
        url : `/trashes/settings/${answer_num}/${member}`, // /trashes/settings/{answer_num}/{member_num}
        method : "patch",
        baseURL : "http://61.72.99.219:9130"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function questionApi(question_num) {
    axios({
      url : `/question/calendars/${question_num}`,
      method : "get",
      baseURL: 'http://61.72.99.219:9130',
    }).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
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
        {/* 실제로는 trashAllData */}
        {trashAllData.map((data, index) => {
          return(
            <div>
              <hr></hr>
              <div className="question">
                <p>{data.answer_date && data.answer_date.substring(0,2)}월 {data.answer_date && data.answer_date.substring(2,4)}일</p>
                <p>{questionApi(data.question_num)}api호출</p>
              </div>
              <div className="answers">
                <p>{data.answer_year}년의 나:</p>
                <p>{data.answer}</p>
              </div>
              <div className="btns">
                <img onClick={() => revert(data.answer_num)} src={restore_normal}></img>
                <img src={Line}></img>
                <img onClick={() => oneRemove(data.answer_num)} src={delete_normal}></img>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

function DeleteModal() {
  function goTrash() {
    axios(
      { url : `/answers/trashes/{answer_num}/{}`, // /answers/trashes/{answer_num}/{member_num} 
        method : "patch",
        baseURL : "http://61.72.99.219:9130"
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  function xDelete() {
    // setDeletes(false);
  }
  return(
    <div className="deleteModal">
      <img onClick={xDelete} src={xxxxx}></img>
      <p>답변을 정말 삭제하시겠어요?</p>
      <p>삭제된 답변은 휴지통에 일주일 동안 보관됩니다</p>
      <section>
        <p onClick={goTrash}>삭제하기</p>
        <p onClick={xDelete}>취소하기</p>
      </section>
    </div>
  )
}

export default Trash;