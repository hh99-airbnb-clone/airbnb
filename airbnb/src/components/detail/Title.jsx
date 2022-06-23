import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// icons
import { GoStar } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";

const Title = () => {
  const title_list = useSelector((state) => state.comment.posts);
  const comment_list = useSelector((state) => state.comment.comments);

  //첫 렌더링때 할당된 값이 없을 때 읽지못하는 에러가 발생
  // 해결하려면 로딩값을 따로주거나 !title_list 처럼 활용
  if (!title_list) return;
  return (
    <>
      <Wrap>
        <PostTitle>
          <span>
            <BsTranslate style={{ margin: "10px 15px 0px 0px" }} />
          </span>
          {title_list.title}
        </PostTitle>
        <Btngroup>
          <CommentLocal>
            <span style={{ margin: "4px 4px 6px 0px" }}>
              <GoStar style={{ width: "14px", marginRight: "2px" }} />
            </span>
            <p style={{ margin: "0px 5px 3px 0px", textDecoration: "none" }}>
              {" "}
              4.76 ·{" "}
            </p>
            <p
              style={{ margin: "0px 5px 3px 0px", textDecoration: "underline" }}
            >
              {" "}
              {comment_list?.length === 0
                ? "New!"
                : "후기" + comment_list?.length + "개"}{" "}
              ·
            </p>
            <p
              style={{
                color: "gray",
                margin: "0px 0px 3px 0px",
                textDecoration: "underline",
              }}
            >
              {title_list.address}
            </p>
          </CommentLocal>
          <Btn
            onClick={() => {
              window.alert("comming soon");
            }}
          >
            <ShareBtn style={{ marginRight: "20px" }}>
              <Icons>
                <FiShare />
              </Icons>
              <div>공유하기</div>
            </ShareBtn>
            <ShareBtn>
              <Icons style={{ fontSize: "18px" }}>
                <BiHeart />
              </Icons>
              <div>저장</div>
            </ShareBtn>
          </Btn>
        </Btngroup>
      </Wrap>
    </>
  );
};

export default Title;

const Wrap = styled.div``;

const PostTitle = styled.p`
  display: flex;
  text-align: left;
  align-items: center;
  margin-bottom: 5px;
  color: #222222;

  font-size: 26px;
  font-weight: 550;
  margin-top: 0px;
`;

const Btngroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;

  line-height: 5px;
`;

const CommentLocal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ShareBtn = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: underline;
  padding: 8px;
  /* height: 42px; */
  border-radius: 8px;
  color: rgb(34, 34, 34);
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  & :hover {
    background: #f7f7f7;
  }
`;

const Icons = styled.span`
  margin-right: 8px;
`;
