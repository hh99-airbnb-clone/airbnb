import React from "react";
import styled from "styled-components";
import { GoStar } from "react-icons/go";
import { BsFillFlagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Follow = () => {
  const comment_list = useSelector((state) => state.comment.comments);
  const avg_list = useSelector((state) => state.comment.commentAvgs);
  // sidebar 컴포넌트 추가기능 구현 시간부족
  return (
    <>
      <BarContainer>
        <NavBar>
          <NavBox>
            <NavContent>
              <P>요금을 확인하려면 날짜를 입력하세요.</P>
              <Ctext>
                <span style={{ marginTop: "3px" }}>
                  <GoStar
                    style={{
                      width: "13px",
                      marginRight: "3px",
                      paddingTop: "3px",
                    }}
                  />
                </span>
                <p style={{ margin: "3px 5px 24px 0px", fontWeight: "500" }}>
                  <span>
                    {" "}
                    {avg_list.totalStar === 0 ? "New!" : avg_list.totalStar} ·
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      textDecoration: "underline",
                      marginLeft: "4px",
                      fontSize: "14px",
                    }}
                  >
                    후기 {comment_list.length}개
                  </span>
                </p>
              </Ctext>

              <BoxWrap>
                <NavSbox>
                  <HalfBox>
                    <BoxText>체크인</BoxText>
                    <BoxText1>날짜 추가</BoxText1>
                  </HalfBox>
                  <HalfBox1>
                    <BoxText>체크아웃</BoxText>
                    <BoxText1>날짜 추가</BoxText1>
                  </HalfBox1>
                </NavSbox>
                <NavSbox1>
                  <BoxText>인원</BoxText>
                  <BoxText2>게스트 1명</BoxText2>
                </NavSbox1>
              </BoxWrap>
              <PinkButton
                onClick={() => {
                  window.alert("comming soon");
                }}
              >
                예약 하기
              </PinkButton>
            </NavContent>
            <Fuck
              onClick={() => {
                window.alert("comming soon");
              }}
            >
              <span style={{ marginRight: " 16px", paddingTop: "15" }}>
                <BsFillFlagFill />
              </span>
              숙소 신고하기
            </Fuck>
          </NavBox>
        </NavBar>
      </BarContainer>
    </>
  );
};

export default Follow;
const Ctext = styled.div`
  flex-direction: row;
  display: flex;
`;
const BarContainer = styled.div`
  min-width: 500px;
  width: 100%;
  height: 2300px;
  align-items: stretch;
`;

const NavBar = styled.div`
  margin-top: 23px;
  margin-bottom: 100px;
  width: 372px;
  float: right;
  height: 328px;
  padding: 24px;
  position: sticky;
  top: 100px;
`;

const NavBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border-radius: 12px;
  text-align: left;
  border: 1px solid rgb(221, 221, 221);
  @media screen and (max-width: 1296px) {
    display: none;
  }
`;

const NavContent = styled.div`
  padding: 24px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: rgb(34, 34, 34) !important;
  line-height: 27px;
  width: 270px;
  margin: 0px;
  color: #222222;
`;

const NavSbox = styled.div`
  border-bottom: 1px solid #717171;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
`;
const NavSbox1 = styled.div`
  width: 100%;
  height: 56px;
`;

const HalfBox = styled.div`
  width: 163px;
  border-right: 1px solid #717171;
`;
const HalfBox1 = styled.div`
  width: 163px;
`;

const BoxWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #717171;
`;

const BoxText = styled.p`
  padding: 10px 0px 0px 10px;
  margin: 0px;
  font-size: 10px;
  font-weight: 550;
`;

const BoxText1 = styled.p`
  font-size: 14px;
  color: #717171;
  margin: 0px;
  padding-left: 10px;
`;
const BoxText2 = styled.p`
  font-size: 14px;
  margin: 0px;
  padding-left: 10px;
`;

const PinkButton = styled.button`
  width: 100%;
  margin: 14px 0px;
  height: 50px;
  padding: 0px;
  background: rgb(229, 29, 82);
  background: linear-gradient(
    90deg,
    rgba(229, 29, 82, 1) 0%,
    rgba(255, 0, 82, 1) 68%,
    rgba(240, 29, 108, 1) 100%
  );
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 550;
  align-items: center;
  cursor: pointer;
`;

const Fuck = styled.div`
  color: #717171;
  text-align: center;
  font-size: 14px;
  margin: 24px 0px 0px 0px;
  font-weight: 600;
  text-decoration: underline black;
  cursor: pointer;
  @media screen and (max-width: 1296px) {
    display: none;
  }
`;
