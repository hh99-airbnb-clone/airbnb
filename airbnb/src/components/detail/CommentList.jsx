import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentList = () => {
  const comment_list = useSelector((state) => state.comments);

  return (
    <CommentAll>
      <Comment>
        <UserProfile>
          <div>
            <UserImage />
          </div>
          <NameDate>
            <UserName>김정욱</UserName>
            <Date> 2222년 7월</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>
          숙소가 정말 좋아요! 숙소가 정말 좋아요!숙소가 정말 좋아요!숙소가 정말
          좋아요!
        </CommentContent>
      </Comment>
      <Comment>
        <UserProfile>
          <div>
            <UserImage />
          </div>
          <NameDate>
            <UserName>김정욱</UserName>
            <Date> 2222년 7월</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>
          숙소가 정말 좋아요! 숙소가 정말 좋아요!숙소가 정말 좋아요!숙소가 정말
          좋아요!
        </CommentContent>
      </Comment>
    </CommentAll>
  );
};

export default CommentList;

const CommentAll = styled.div`
  width: 100%;
  display: flex;
`;

const Comment = styled.div`
  width: 48%;
  margin: 0px 0px 40px 0px;
  padding: 0px 8px;
  min-height: 160px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserImage = styled.div`
  margin: 0px 12px 16px 0px;
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
