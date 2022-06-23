//메인페이지 하단 FOOTER 컴포넌트

import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { MdOutlineMap } from "react-icons/md";
import styled from 'styled-components';


const Footer = () => {
  return (
    <>
      <div style={{width:"100%", height:"10px"}}>
        <Mybutton>
              <span>지도 표시하기</span>
              <MdOutlineMap style={{ width: '15px', height: '15px' }} />
        </Mybutton>
      </div>
      <div className='footer'>
        <div className='footerLeft'>
          <span>© 2022 Airbnb, Inc. · </span>
          <span>개인정보 처리방침 · </span>
          <span>이용약관 · </span>
          <span>사이트맵 · </span>
          <span>한국의 변경된 환불 정책 · </span>
          <span>회사 세부정보</span>
        </div>
        <div className='footerRight'>
          <TbWorld style={{width : '20px', height : '15px'}}/>
          <span style={{ marginRight: '8px' }}>한국어 (KR) </span>
          <span style={{ marginRight: '15px' }}>₩  KRW</span>
          <span style={{ marginRight: '8px' }}>지원 및 참고 자료 ⋀</span>
        </div>
        <div className='bottom'>
          <div style={{ borderTop: '1px solid #dddddd' }}>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</div>
        </div>
      </div>
    </>
  )
}

export default Footer

const Mybutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid black;
  border-radius: 24px;
  background-color: black;
  color: white;
  width: 150px;
  height: 50px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 14px 19px !important;
  position: inline-block;
  margin: auto;
  position: fixed;
  bottom: 130px;
  left: 50%;
  transform: translate(-50%, 0);
`