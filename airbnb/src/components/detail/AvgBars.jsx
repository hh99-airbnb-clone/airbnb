import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AvgBars = () => {
  const avg_list = useSelector((state) => state.comment.commentAvgs);

  // 후기 각각 평점 컴포넌트

  if (!avg_list) return;
  return (
    <>
      <All>
        <AvgAll>
          <AvgWrap>
            <span>청결도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.cleanAvg}</Point>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>체크인</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.chechingAvg}</Point>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>정확도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.accuracyAvg}</Point>
            </AvgBox>
          </AvgWrap>
        </AvgAll>
        <AvgAll>
          <AvgWrap>
            <span>의사소통</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.communicationAvg}</Point>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>위치</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.locationAvg}</Point>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>만족도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <Point>{avg_list.satisfactionAvg}</Point>
            </AvgBox>
          </AvgWrap>
        </AvgAll>
      </All>
    </>
  );
};

export default AvgBars;

const All = styled.div`
  display: flex;

  span {
    font-weight: 500;
  }
`;

const AvgAll = styled.div`
  margin: 0px 20px 0px 0;
  width: 50%;
`;

const AvgWrap = styled.div`
  margin: 10px 40px 20px 0;
  width: 80%;
  display: flex;

  justify-content: space-between;
`;

const AvgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvgBar = styled.div`
  margin: 0 20px;
  width: 130px;
  height: 4px;
  border-radius: 5px;
  background-color: black;
`;

const Point = styled.span`
  font-size: 0.7em;
  font-weight: 500;
`;
