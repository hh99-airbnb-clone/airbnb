import React from "react";
import styled from "styled-components";

const CommentAvg = () => {
  return (
    <div>
      <Wrap>
        <CommentTitle>
          <span>
            <p
              style={{ color: "#ff385c", fontSize: "21px", marginTop: "5px" }}
            />
          </span>
          <CommentCnt>4.76 · 후기 10개</CommentCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <input type="text" />
          <AddCom>작성하기</AddCom>
        </WriteComment>
      </Wrap>
    </div>
  );
};

export default CommentAvg;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  width: 100%;
  text-align: left;
  padding: 48px 0px;
`;

const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 32px 0px;
`;

const CommentCnt = styled.div`
  font-size: 22px;
  color: #222222;
  margin-left: 8px;
  font-weight: 600;
`;

const WriteComment = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    width: 800px;
  }
`;

const AddCom = styled.button`
  padding: 12px 16px 12px 16px;
  border: none;
  box-shadow: #e51d52 0px 0px 0px 1px inset;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  background-color: #e51d52;
  font-weight: 600;
`;
