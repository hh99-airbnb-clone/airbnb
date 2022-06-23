import { useRef } from "react";
import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { GoStar } from "react-icons/go";

//모듈
import { __addComment, __loadAvgs } from "../../redux/modules/Comment";

//컴포넌트
import AvgBars from "./AvgBars";
import { useParams } from "react-router-dom";

const initialState = {
  comment: "",
  clean: "1",
  checkin: "1",
  accuracy: "1",
  communication: "1",
  location: "1",
  satisfaction: "1",
};
//평점 남기기 리듀서
function reducer(state, action) {
  switch (action.type) {
    case "COMMENT":
      return { ...state, [action.name]: action.value };

    case "RESET":
      return initialState;
    default:
      return state;
  }
}
// 후기 작성 밑 평점남기기 페이지
const CommentAvg = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [review, setreview] = useReducer(reducer, initialState);
  const comment_list = useSelector((state) => state.comment.comments);
  const avg_list = useSelector((state) => state.comment.commentAvgs);

  const pointList = ["1", "2", "3", "4", "5"];

  const addComment = () => {
    dispatch(
      __addComment({
        id: id,
        comment: review.comment,
        clean: review.clean,
        checkin: review.checkin,
        accuracy: review.accuracy,
        communication: review.communication,
        location: review.location,
        satisfaction: review.satisfaction,
      })
    );
    setreview({
      type: "RESET",
    });

    setToggle(!toggle);
  };

  //코드 간략화를 위해 name과 value값을 변수로 사용
  const onChange = (e) => {
    const { name, value } = e.target;
    setreview({
      type: "COMMENT",
      name,
      value,
    });
  };

  return (
    <div>
      <Wrap>
        <CommentTitle>
          <span>
            <p
              style={{ color: "#ff385c", fontSize: "21px", marginTop: "5px" }}
            />
          </span>
          <CommentCnt>
            <span>
              <GoStar style={{ margin: "8px 5px 0px 0px" }} />
            </span>
            {avg_list.totalStar === 0 ? "New" : avg_list.totalStar} · 후기{" "}
            {comment_list.length}개
          </CommentCnt>
          {!toggle ? (
            <CommentBtn
              style={{ marginLeft: "30px" }}
              onClick={() => setToggle(!toggle)}
            >
              <BsPencil />
              ㅤ후기작성
            </CommentBtn>
          ) : (
            <CommentBtn
              style={{ marginLeft: "30px" }}
              onClick={() => setToggle(!toggle)}
            >
              <BsPencil />
              ㅤ작성취소
            </CommentBtn>
          )}
        </CommentTitle>
        <AvgBars />{" "}
        {toggle ? (
          <>
            <WriteComment 후기 작성>
              <AddIpt
                type="text"
                className="review-ipt"
                name="comment"
                onChange={onChange}
              />
              <AddCom
                onClick={() => {
                  if (review.comment === "") {
                    window.alert("후기를 입력해주세요!");
                  } else {
                    addComment();
                  }
                }}
              >
                작성하기
              </AddCom>
            </WriteComment>
            <ReviewWrap>
              <ReviewBox>
                <Label>
                  {" "}
                  <h4 style={{ marginRight: "19px" }}>청결도</h4>
                  {pointList.map((v, i) => {
                    return (
                      <div>
                        <Radio
                          name="clean"
                          key={i}
                          type="radio"
                          value={v}
                          // checked={point.clean === v}
                          onChange={onChange}
                        />
                      </div>
                    );
                  })}
                </Label>
                <Label>
                  <h4 style={{ marginRight: "19px" }}>체크인</h4>
                  {pointList.map((v, i) => {
                    return (
                      <Radio
                        key={i}
                        type="radio"
                        name="checkin"
                        value={v}
                        // checked={point.checkin === v}
                        onChange={onChange}
                      />
                    );
                  })}
                </Label>{" "}
                <Label>
                  <h4 style={{ marginRight: "19px" }}> 정확도</h4>
                  {pointList.map((v, i) => {
                    return (
                      <div>
                        <Radio
                          key={i}
                          type="radio"
                          name="accuracy"
                          value={v}
                          // checked={point.accuracy === v}
                          onChange={onChange}
                        />
                      </div>
                    );
                  })}
                </Label>{" "}
              </ReviewBox>
              <ReviewBox>
                <Label>
                  <h4 style={{ marginRight: "4px" }}>의사소통</h4>
                  {pointList.map((v, i) => {
                    return (
                      <Radio
                        key={i}
                        type="radio"
                        name="communication"
                        value={v}
                        // checked={point.communication === v}
                        onChange={onChange}
                      />
                    );
                  })}
                </Label>{" "}
                <Label>
                  {" "}
                  <h4 style={{ marginRight: "35px" }}>위치</h4>
                  {pointList.map((v, i) => {
                    return (
                      <Radio
                        key={i}
                        type="radio"
                        name="location"
                        value={v}
                        // checked={point.location === v}
                        onChange={onChange}
                      />
                    );
                  })}
                </Label>
                <Label>
                  <h4 style={{ marginRight: "19px" }}>만족도</h4>
                  {pointList.map((v, i) => {
                    return (
                      <Radio
                        key={i}
                        type="radio"
                        name="satisfaction"
                        value={v}
                        // checked={point.satisfaction === v}
                        onChange={onChange}
                      />
                    );
                  })}
                </Label>
              </ReviewBox>
            </ReviewWrap>
          </>
        ) : (
          <></>
        )}
      </Wrap>
    </div>
  );
};

export default CommentAvg;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  width: 100%;
  /* text-align: left; */
  padding: 48px 0px;
`;

const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 32px 0px;
`;

const CommentCnt = styled.div`
  display: flex;
  margin: 0px;
  font-size: 22px;
  color: #222222;
  align-items: center;
  font-weight: 600;
`;

const CommentBtn = styled.button`
  padding: 0 10px;
  border-radius: 10px;
  border: none;
  background-color: none;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

const WriteComment = styled.div`
  margin: 30px 110px 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AddIpt = styled.input`
  padding: 12px 16px 12px 16px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
  border: none;
  height: 24px;
  cursor: text;
  font-weight: 600;
`;

const AddCom = styled.button`
  height: 48px;
  width: 100px;
  padding: 12px 16px 12px 16px;
  border: none;
  box-shadow: #e51d52 0px 0px 0px 1px inset;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  background: rgb(229, 29, 82);
  background: linear-gradient(
    90deg,
    rgba(229, 29, 82, 1) 0%,
    rgba(255, 0, 82, 1) 68%,
    rgba(240, 29, 108, 1) 100%
  );
  font-weight: 600;
`;

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 75px;
`;

const Radio = styled.input`
  display: flex;

  width: 25px;
  height: 25px;
  margin: 0 10px;
  accent-color: #e51d52;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;

  align-items: center;

  h4 {
    float: left;
  }
`;
