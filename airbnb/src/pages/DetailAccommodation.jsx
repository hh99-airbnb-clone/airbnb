import React from "react";
import Mountain from "../images/mountain.jpg";
import styled from "styled-components";

//컴포넌트
import TitleImg from "../components/detail/TitleImg";
import DetailContent from "../components/detail/DetailContent";
import CommentList from "../components/detail/CommentList";
import CommentAvg from "../components/detail/CommentAvg";

const DetailAccommodation = () => {
  return (
    <>
      <h1>산블라스섬의 키메라섬 프라이빗 투어 (성인만 참여 가능)</h1>
      <p>★ 4.94 · 후기17개 · San Blas, Nayarit, 멕시코</p>
      <p>공유하기 ♡ 저장</p>
      <TitleImg /> <br />
      <br />
      <h2>Ixchel님이 호스팅하는 섬의 개인실</h2>
      <p>최대 인원 · 2명침실 · 1개침대1개 · 공동 사용 욕실 1개</p>
      <DetailContent />
      <CommentAvg />
      <CommentList />
    </>
  );
};

export default DetailAccommodation;
