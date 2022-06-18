import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//모듈
import { __addComment } from "../../redux/modules/Comment";

const CommentAvg = () => {
  const dispatch = useDispatch();

  const [commetIpt, setCommentItp] = useState("");
  const [point, setPoint] = useState(
    {
      clean: "1",
      checkin: "1",
      accuracy: "1",
      communication: "1",
      location: "1",
      satisfaction: "1",
    } //id: prams 에서 id값 가져오기
  );

  const pointList = ["1", "2", "3", "4", "5"];

  const handleRadio = (e) => {
    setCommentItp(e.target.value);
  };
  const handleRadio1 = (e) => {
    setPoint({
      ...point,
      clean: e.target.value,
    });
  };
  const handleRadio2 = (e) => {
    setPoint({
      ...point,
      checkin: e.target.value,
    });
  };
  const handleRadio3 = (e) => {
    setPoint({
      ...point,
      accuracy: e.target.value,
    });
  };
  const handleRadio4 = (e) => {
    setPoint({
      ...point,
      communication: e.target.value,
    });
  };
  const handleRadio5 = (e) => {
    setPoint({
      ...point,
      location: e.target.value,
    });
  };
  const handleRadio6 = (e) => {
    setPoint({
      ...point,
      satisfaction: e.target.value,
    });
  };

  const addComment = () => {
    dispatch(
      __addComment({
        //id: prams 에서 id값 가져오기
        comment: commetIpt,
        clean: point.clean,
        checkin: point.checkin,
        accuracy: point.accuracy,
        communication: point.communication,
        location: point.location,
        satisfaction: point.satisfaction,
      })
    );

    setPoint({
      clean: "1",
      checkin: "1",
      accuracy: "1",
      communication: "1",
      location: "1",
      satisfaction: "1",
    });
    // setCommentItp("");
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
          <CommentCnt>4.76 · 후기 10개</CommentCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <input value={commetIpt} type="text" onChange={handleRadio} />
          <AddCom
            onClick={(e) => {
              if (commetIpt === "") {
                window.alert("후기를 입력해주세요!");
                setCommentItp("");
              } else {
                addComment();
              }
            }}
          >
            작성하기
          </AddCom>
        </WriteComment>
        <div>
          청결도
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name={i}
                  value={v}
                  checked={point.clean === v}
                  onChange={handleRadio1}
                />
              );
            })}
          </label>
        </div>
        <div>
          체크인
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="checkin-radio"
                  value={v}
                  checked={point.checkin === v}
                  onChange={handleRadio2}
                />
              );
            })}
          </label>
        </div>
        <div>
          정확도
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="accuracy-radio"
                  value={v}
                  checked={point.accuracy === v}
                  onChange={handleRadio3}
                />
              );
            })}
          </label>
        </div>
        <div>
          의사소통
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="communication-radio"
                  value={v}
                  checked={point.communication === v}
                  onChange={handleRadio4}
                />
              );
            })}
          </label>
        </div>
        <div>
          위치
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="location-radio"
                  value={v}
                  checked={point.location === v}
                  onChange={handleRadio5}
                />
              );
            })}
          </label>
        </div>
        <div>
          만족도
          <label>
            {pointList.map((v, i) => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="satisfaction-radio"
                  value={v}
                  checked={point.satisfaction === v}
                  onChange={handleRadio6}
                />
              );
            })}
          </label>
        </div>
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
