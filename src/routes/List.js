import React from "react";
import { useState, useRef } from "react";
import './List.css';
import modify_normal from '../images/modify_normal.png';
import Line from '../images/Line45.png';
import monthBTN from '../images/monthBTN.png';
import delete_normal from '../images/delete_normal.png';
import xxxxx from '../images/xxxxx.png';

function List() {
  const NewDate = new Date();
  const month = NewDate.getMonth() + 1;
  const date = NewDate.getDate();

  const [ deletes , setDeletes ] = useState(false);

  const deleteModalContainer = useRef()
  function showDelete(e) {
    setDeletes(true)
  }

  function xDelete() {
    setDeletes(false)
  }
  return(
    <div className="List">
      <div className="questions">
        <div>
          <p>{month}월 {date}일</p>
          <p>나의 삶의 목적은 무엇인가요?</p>
        </div>
        <img src={monthBTN}></img>
      </div>
      <div className="list">
        <hr></hr>
        <div className="watch">
          <p>2021년의 나:</p>
          <p>나는 이렇고 저렇고 이다 그래서 이렇다 하기는 좀 그렇다 그니까 그래서 나는 오늘 밥을 먹었다 밥 먹으니까 배 아픈데 눈이 더 아프다</p>
        </div>
        <div className="buttons">
          <p>전체공개</p>
          {/* <img src={modify_normal}></img> */}
          <div>
            <img src={modify_normal}></img>
          </div>
          <img src={Line}></img> 
          <div onClick={showDelete}>
            <img src={delete_normal}></img>
          </div>
        </div>
      </div>
      {deletes ?
      (<div className="deleteModal" ref={deleteModalContainer}>
        <img onClick={xDelete} src={xxxxx}></img>
        <p>답변을 정말 삭제하시겠어요?</p>
        <p>삭제된 답변은 휴지통에 일주일 동안 보관됩니다</p>
        <section>
          <p>삭제하기</p>
          <p onClick={xDelete}>취소하기</p>
        </section>
      </div>)
      : null}
    </div>
  )
}

export default List;