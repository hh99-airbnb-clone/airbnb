import React from 'react'
import { Link } from 'react-router-dom';
import './PostAdd.css'

const PostAdd = () => {
  return (
    <>
        <div className='leftBox'>호스팅을 시작합니다.</div>
        <div className='postBox'>
          <h4>숙소 주소를 입력해주세요.</h4>
          <input type='text' />
          <h4>숙소 이름을 작성해주세요.</h4>
          <input type='text' />
          <h4>숙소 금액을 입력해주세요.(1박 기준)</h4>
          <input type='text' placeholder='숫자로 작성해주세요. ex 150,000' />
          <h4>숙박 가능 최대 인원을 작성해주세요.</h4>
          <input type='text' />
          <h4>여러분의 숙소를 소개해주세요.</h4>
          <input type='textarea' />
          <div className='option'>
            <select defaultValue='default'>
              <option>---숙박 시설---</option>
              <option>펜션</option>
              <option>호텔</option>
              <option>아파트</option>
              <option>주택</option>
              <option>게스트 하우스</option>
            </select>
            <select defaultValue='default'>
              <option>---방 개수---</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select defaultValue='default'>
              <option>---와이파이---</option>
              <option>와이파이 있음</option>
              <option>와이파이 없음</option>
            </select>
            <select defaultValue='default'>
              <option>---주차공간---</option>
              <option>주차공간 있음</option>
              <option>주차공간 없음</option>
            </select>
          </div>
          <Link to={'/'}>
            <button className='button'>호스팅 하기</button>
          </Link>
        </div>
    </>
  )
}

export default PostAdd;