import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../../images/prof.png";
import { FiChevronRight } from "react-icons/fi";

const CommentBox = ({ modalOpen, data, cModal }) => {
  return (
    <Comment>
      <UserProfile>
        <div>
          <UserImage src={Profile} />
        </div>
        <NameDate>
          <UserName>{data.user_nickname}</UserName>
          <Date>{data.createdAt}</Date>
        </NameDate>
      </UserProfile>
      <CommentContent>{data.content}</CommentContent>
      {/* 모달창에서 더보기 안보이게 하기위해서 현재 모달값을 받아옴 */}
      {cModal === true ? null : (
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={modalOpen}
          >
            더 보기
          </span>
          <span style={{ margin: "4px 4px 6px 0px" }}>
            <FiChevronRight
              style={{
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                margin: "0",
              }}
            />
          </span>
        </div>
      )}
    </Comment>
  );
};

export default CommentBox;

const Comment = styled.div`
  width: 45%;
  margin: 0px 50px 10px 0px;
  padding: 0px;
  min-height: 160px;
`;
const CommentContent = styled.div`
  white-space: normal;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  line-height: 1.5;
  height: 4.5em;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: left;
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
  text-align: left;
`;

const Date = styled.div`
  color: #717171;
  font-size: 14px;
`;
