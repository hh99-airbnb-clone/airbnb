import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addPost } from '../redux/modules/post';
import './PostAdd.css'


const PostAdd = () => {

  const [selectedImages, setSelectedImages] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addressInputRef = useRef();
  const titleInputRef = useRef();
  const feeInputRef = useRef();
  const peopleInputRef = useRef();
  const contentInputRef = useRef();
  const categoryInputRef = useRef();
  const roomInputRef = useRef();
  const wifiInputRef = useRef();
  const parkingInputRef = useRef();

  const onChangeSelectImages = (e) => {
    setSelectedImages(e.target.files);
  }

  const addPost = (e) => {
    e.preventDefault();

    const form = new FormData();

    for(let i = 0 ; i < selectedImages ; i++){
      form.append("image", selectedImages);
    }

    form.append("address", addressInputRef.current.value);
    form.append("title", titleInputRef.current.value);
    form.append("fee", feeInputRef.current.value);
    form.append("people", peopleInputRef.current.value);
    form.append("content", contentInputRef.current.value);
    form.append("category", categoryInputRef.current.value);
    form.append("room", roomInputRef.current.value);
    form.append("wifi", wifiInputRef.current.value);
    form.append("parking", parkingInputRef.current.value);

    dispatch(__addPost({
      formData : form
    }));
    navigate('/');
  }

  return (
    <>
        <div className='leftBox'>호스팅을 시작합니다.</div>
        <form className='postBox'>

          <h4>숙소 주소를 입력해주세요.</h4>
          <input ref={addressInputRef} type='text' />

          <h4>숙소 이름을 작성해주세요.</h4>
          <input ref={titleInputRef} type='text' />

          <h4>숙소 금액을 입력해주세요.(1박 기준)</h4>
          <input ref={feeInputRef} type='text' placeholder='숫자로 작성해주세요. ex 150,000' />

          <h4>숙박 가능 최대 인원을 작성해주세요.</h4>
          <input ref={peopleInputRef} type='text' />

          <h4>여러분의 숙소를 설명해주세요.</h4>
          <input ref={contentInputRef} type='text' />

          <h4>여러분의 숙소를 보여주세요.</h4>
          <input type='file' multiple onChange={onChangeSelectImages} accept='image/*'/>

          <div className='option'>
            <select ref={categoryInputRef} defaultValue='default'>
              <option>---숙박 시설---</option>
              <option>펜션</option>
              <option>호텔</option>
              <option>아파트</option>
              <option>주택</option>
              <option>게스트 하우스</option>
            </select>

            <select ref={roomInputRef} defaultValue='default'>
              <option>---방 개수---</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <select ref={wifiInputRef} defaultValue='default'>
              <option>---와이파이---</option>
              <option>와이파이 있음</option>
              <option>와이파이 없음</option>
            </select>

            <select ref={parkingInputRef} defaultValue='default'>
              <option>---주차공간---</option>
              <option>주차공간 있음</option>
              <option>주차공간 없음</option>
            </select>

          </div>

            <button className='button' onClick={addPost}>호스팅 하기</button>
            
        </form>
    </>
  )
}

export default PostAdd;