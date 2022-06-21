import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentModal from "./CommentModal";
import Profile from "../../images/prof.png";

const CommentList = () => {
  const comment_list = useSelector((state) => state.comments);
  const [cModal, setCModal] = useState(false);

  const modalOpen = () => {
    console.log(cModal);
    setCModal(true);
    document.body.style.overflow = "hidden";
  };
  const modalClose = (e) => {
    e.preventDefault();
    setCModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <CommentModal cModal={cModal} modalClose={modalClose} />
      <CommentAll>
        <Comment>
          <UserProfile>
            <div>
              <UserImage src={Profile} />
            </div>
            <NameDate>
              <UserName>김정욱</UserName>
              <Date> 2222년 7월</Date>
            </NameDate>
          </UserProfile>
          <CommentContent>
            숙소가 정말 좋아요! 숙소가 정말 좋아요!숙소가 정말 좋아요!숙소가
            정말 좋아요!
          </CommentContent>
        </Comment>
        <Comment>
          <UserProfile>
            <div>
              <UserImage src={Profile} />
            </div>
            <NameDate>
              <UserName>김정욱</UserName>
              <Date> 2222년 7월</Date>
            </NameDate>
          </UserProfile>
          <CommentContent>
            숙소가 정말 좋아요! 숙소가 정말 좋아요!숙소가 정말 좋아요!숙소가
            정말 좋아요!
          </CommentContent>
        </Comment>
      </CommentAll>
      <OverComment onClick={modalOpen}>
        <p style={{ margin: "0px", padding: "13px 23px" }}>
          후기 11개 모두 보기
        </p>
      </OverComment>
    </>
  );
};

export default CommentList;

const CommentAll = styled.div`
  width: 100%;
  display: flex;
`;

const Comment = styled.div`
  width: 48%;
  margin: 0px 0px 10px 0px;
  padding: 0px 8px;
  min-height: 160px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const UserImage = styled.div`
  margin: 0px 15px 0px 0px;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const NameDate = styled.div``;

const UserName = styled.div`
  color: #222222;
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  color: #717171;
  font-size: 14px;
`;

const CommentContent = styled.div`
  max-width: 450px;
  white-space: normal;
`;

const OverComment = styled.div`
  border-radius: 8px;
  border: 1px solid black;
  margin: 0 auto 50px 0;
  min-width: 180px;
  max-width: 200px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: #f7f7f7;
  }
`;
