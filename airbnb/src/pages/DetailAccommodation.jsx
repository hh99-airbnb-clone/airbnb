import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//컴포넌트
import FollowHeader from "../components/detail/FollowHeader";
import Title from "../components/detail/Title";
import TitleImg from "../components/detail/TitleImg";
import TitleBox from "../components/detail/TitleBox";
import DetailContent from "../components/detail/DetailContent";
import CommentList from "../components/detail/CommentList";
import CommentAvg from "../components/detail/CommentAvg";
import DetailMap from "../components/detail/DetailMap";
import Rules from "../components/detail/Rules";
import DetailFooter from "../components/detail/DetailFooter";

//모듈
import { __loadComments, __loadImgs } from "../redux/modules/Comment";
import Introduce from "../components/detail/Introduce";

const DetailAccommodation = () => {
  const dispatch = useDispatch();
  const paramsId = useParams();
  // console.log(paramsId);
  const img_list = useSelector((state) => state);
  console.log(img_list);

  // 게시글 아이디 값 주기
  React.useEffect(() => {
    dispatch(__loadImgs(1));
    // dispatch(__loadComments(paramsId));
  }, []);

  return (
    <>
      <FollowHeader />
      <Box>
        <Title />
        <TitleImg />
        <Introduce />
        <CommentAvg />
        <CommentList />
        <DetailMap />
        <Rules />
      </Box>
      <DetailFooter />
    </>
  );
};

export default DetailAccommodation;

const Box = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
