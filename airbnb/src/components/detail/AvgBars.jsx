import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AvgBars = () => {
  const avg_list = useSelector((state) => state.commentAvg);

  return (
    <>
      <All>
        <AvgAll>
          <AvgWrap>
            <span>청결도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>체크인</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>정확도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
            </AvgBox>
          </AvgWrap>
        </AvgAll>
        <AvgAll>
          <AvgWrap>
            <span>의사소통</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>위치</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
            </AvgBox>
          </AvgWrap>
          <AvgWrap>
            <span>만족도</span>
            <AvgBox>
              <AvgBar></AvgBar>
              <span>4,95</span>
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
`;

const AvgAll = styled.div`
  margin: auto;
  width: 40%;
`;

const AvgWrap = styled.div`
  margin: 20px 20px;
  width: 100%;
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
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: black;
`;
