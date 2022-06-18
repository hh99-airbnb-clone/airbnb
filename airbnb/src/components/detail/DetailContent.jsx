import React from "react";
import styled from "styled-components";

const DetailContent = () => {
  return (
    <div>
      <>
        {/* 추가 설명 */}
        <Wrap>
          <TextWrap>
            <TextBox>
              <Pgroup>
                <TitleP>셀프 체크인</TitleP>
                <IntroP>키패드를 이용해 체크인하세요.</IntroP>
              </Pgroup>
            </TextBox>

            <TextBox>
              <Pgroup>
                <TitleP>훌륭한 숙소 위치</TitleP>
                <IntroP>
                  최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
                </IntroP>
              </Pgroup>
            </TextBox>
            <TextBox1>
              <Pgroup>
                <TitleP>순조로운 체크인 과정</TitleP>
                <IntroP>
                  최근 숙박한 게스트 중 95%가 체크인 과정에 별점 5점을 준
                  숙소입니다.
                </IntroP>
              </Pgroup>
            </TextBox1>
          </TextWrap>
        </Wrap>
        {/* 작성자 게시글 내용 */}
        <Wrap>
          <TextWrap1>
            <span
              style={{
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                window.alert("comming soon");
              }}
            >
              더 보기
            </span>
          </TextWrap1>
        </Wrap>
        {/* 숙박 장소 */}
        <Wrap style={{ padding: "48px 0px 100px" }}>
          <SleepZone>
            <SleepP>숙박 장소</SleepP>
            <BadBox>
              <BadContent style={{ marginBottom: "16px" }}></BadContent>
              <BadContent
                style={{
                  marginBottom: "8px",
                  fontSize: "16px",
                  fontWeight: "800",
                }}
              >
                침실
              </BadContent>
              <BadContent style={{ fontSize: "14px" }}>
                퀸사이즈 침대 1개, 소파 1개
              </BadContent>
            </BadBox>
          </SleepZone>
        </Wrap>
        {/* 숙소 편의 시설 */}
        <Wrap style={{ padding: "48px 0px" }}>
          <SleepP> 편의 시설 </SleepP>
          <Facilities></Facilities>

          <OverComment>
            {" "}
            <p style={{ margin: "0px", padding: "13px 23px" }}>
              편의시설35개 모두 보기
            </p>
          </OverComment>
        </Wrap>
        {/* 달력 들어가야 되는데 이미지로 할지 고민중  */}
        <Wrap1>
          <div>
            <SleepP style={{ padding: "0px 0px 0px 0px", lineHeight: "25px" }}>
              체크인 날짜를 선택해주세요.
            </SleepP>
            <IntroP>여행 날짜를 입력하여 정확한 요금을 확인하세요.</IntroP>
          </div>

          <Cfooter>
            <div style={{ marginLeft: "24px", width: "16px" }}></div>
            <Del> 날짜 지우기 </Del>
          </Cfooter>
        </Wrap1>
      </>
    </div>
  );
};

export default DetailContent;

const Wrap1 = styled.div`
  padding: 48px 0px 48px 0px;
  text-align: left;
  width: 650px;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  padding: 32px 0px;
  text-align: left;
  width: 650px;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin-bottom: 16px;
  margin: 0px 0px 5px 0px;
`;
const TextBox1 = styled.div`
  font-size: 16px;
  flex-direction: row;
  display: flex;
`;

const Pgroup = styled.div`
  display: block;
  margin-left: 16px;
`;

const TitleP = styled.p`
  font-size: 16px;
  line-height: 5px;
  font-weight: 800;
  color: rgb(34, 34, 34);
`;
const IntroP = styled.p`
  font-size: 14px;
  line-height: 8px;
  color: rgb(113, 113, 113);
`;

const TextWrap1 = styled.span`
  line-height: 24px;
  max-width: 450px;
  padding-bottom: 16px;
  flex-direction: column;
  display: flex;
  min-height: 182px;
`;
const TextWrap = styled.span``;

const SleepZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 207px;
  height: 163px;
`;

const SleepP = styled.div`
  font-size: 22px;
  margin: 0px;
  font-weight: 600;
  padding-bottom: 24px;
`;

const BadBox = styled.div`
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 10px;
`;

const BadContent = styled.div``;

const Facilities = styled.div`
  display: flex;
  flex-direction: row;
`;

const HalfFac = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ImotiText = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cfooter = styled.div`
  justify-content: space-between;
  display: flex;
  width: 695px;
`;

const Del = styled.div`
  margin-right: 10px;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 600;
`;

const OverComment = styled.div`
  border-radius: 8px;
  border: 1px solid black;
  margin-top: 32px;
  min-width: 180px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: #f7f7f7;
  }
`;