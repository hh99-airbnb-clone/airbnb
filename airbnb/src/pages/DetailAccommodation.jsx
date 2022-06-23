import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//컴포넌트
import FollowHeader from "../components/detail/FollowHeader";
import Title from "../components/detail/Title";
import TitleImg from "../components/detail/TitleImg";
import CommentList from "../components/detail/CommentList";
import CommentAvg from "../components/detail/CommentAvg";
import DetailMap from "../components/detail/DetailMap";
import Rules from "../components/detail/Rules";
import DetailFooter from "../components/detail/DetailFooter";
import Introduce from "../components/detail/Introduce";

//모듈
import {
  __loadAvgs,
  __loadComments,
  __loadPosts,
} from "../redux/modules/Comment";

const DetailAccommodation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // 게시글 아이디 값 주기
  React.useEffect(() => {
    dispatch(__loadComments(id));
    dispatch(__loadPosts(id));
    dispatch(__loadAvgs(id));
  }, [dispatch, id]);

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
