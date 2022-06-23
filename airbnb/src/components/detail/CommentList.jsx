import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
//component
import CommentModal from "./CommentModal";
import CommentBox from "./CommentBox";

const CommentList = () => {
  const comment_list = useSelector((state) => state.comment.comments);

  const [cModal, setCModal] = useState(false);

  const modalOpen = () => {
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
      <CommentModal
        cModal={cModal}
        modalClose={modalClose}
        comment_list={comment_list}
      />
      <CommentAll>
        {comment_list.map((data, i) => {
          if (i < 6)
            return <CommentBox data={data} key={i} modalOpen={modalOpen} />;
        })}
      </CommentAll>

      <OverComment onClick={modalOpen}>
        <p style={{ margin: "0px", padding: "13px 23px" }}>
          후기 {comment_list.length}개 모두 보기
        </p>
      </OverComment>
    </>
  );
};

export default CommentList;

const CommentAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
