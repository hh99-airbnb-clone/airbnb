import React from "react";
import styled from "styled-components";
//icons
import { BsDoorOpen, BsKey } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdBed } from "react-icons/md";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { IoIosSnow } from "react-icons/io";
import { GiJumpingDog } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaRegKeyboard } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
//image
import AirCover from "../../images/aircover.webp";
//component
import Calender from "./Calender";
import { useSelector } from "react-redux";

const DetailContent = () => {
  const post_list = useSelector((state) => state.comment.posts);

  return (
    <div>
      <>
        {/* 추가 설명 */}
        <Wrap>
          <TextWrap>
            <TextBox>
              <Pgroup>
                <TitleP>
                  <span>
                    <BsDoorOpen style={{ margin: "5px 10px 0px 0px" }} />
                  </span>
                  셀프 체크인
                </TitleP>
                <IntroP>키패드를 이용해 체크인하세요.</IntroP>
              </Pgroup>
            </TextBox>
            <TextBox>
              <Pgroup>
                <TitleP>
                  <span>
                    <GrLocation style={{ margin: "5px 10px 0px 0px" }} />
                  </span>
                  훌륭한 숙소 위치
                </TitleP>
                <IntroP>
                  최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
                </IntroP>
              </Pgroup>
            </TextBox>
            <TextBox1>
              <Pgroup>
                <TitleP>
                  <span>
                    <BsKey style={{ margin: "5px 10px 0px 0px" }} />
                  </span>
                  순조로운 체크인 과정
                </TitleP>
                <IntroP>
                  최근 숙박한 게스트 중 95%가 체크인 과정에 별점 5점을 준
                  숙소입니다.
                </IntroP>
              </Pgroup>
            </TextBox1>
          </TextWrap>
        </Wrap>
        {/* 에어커버 */}
        <Wrap>
          <img
            src={AirCover}
            alt=""
            style={{ height: "20px", weight: "20px", borderRadius: "0px" }}
          />

          <p
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "rgb(73, 73, 73)",
            }}
          >
            모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
            경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
            포함됩니다.
          </p>

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
            더 알아보기
          </span>
        </Wrap>
        {/* 작성자 게시글 내용 */}
        <Wrap>
          {" "}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "20px",
              color: "rgb(73, 73, 73)",
            }}
          >
            {post_list.content}
          </p>
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
              <span style={{ margin: "4px 4px 6px 0px" }}>
                <FiChevronRight
                  style={{
                    fontSize: "14px",
                    width: "14px",
                    marginRight: "2px",
                  }}
                />
              </span>
            </span>
          </TextWrap1>
        </Wrap>
        {/* 숙박 장소 */}
        <Wrap style={{ padding: "48px 0px 100px" }}>
          <SleepZone>
            <SleepP>숙박 장소</SleepP>
            <BadBox>
              <BadContent style={{ marginBottom: "16px" }}>
                <BiBed style={{ fontSize: "26px" }} />
                <MdBed style={{ fontSize: "26px", marginLeft: "6px" }} />
              </BadContent>
              <BadContent
                style={{
                  marginBottom: "8px",
                  fontSize: "16px",
                  fontWeight: "800",
                }}
              >
                방 {post_list.room}개
              </BadContent>
              <BadContent style={{ fontSize: "14px" }}>
                퀸사이즈 침대 {post_list.room}개,
                <br />
                소파 1개
              </BadContent>
            </BadBox>
          </SleepZone>
        </Wrap>
        {/* 숙소 편의 시설 */}
        <Wrap style={{ padding: "48px 0px" }}>
          <SleepP> 편의 시설 </SleepP>
          {post_list.wifi === "와이파이 있음" ? (
            <Facilities>
              <AiOutlineWifi style={{ fontSize: "25px" }} />
              ㅤ무선 인터넷
            </Facilities>
          ) : null}
          {post_list.parking === "주차공간 있음" ? (
            <Facilities>
              <AiOutlineCar style={{ fontSize: "25px" }} />
              ㅤ건물 진입로 무료주차-1대 주차 가능
            </Facilities>
          ) : null}
          <Facilities>
            <IoIosSnow style={{ fontSize: "25px" }} />
            ㅤ에어컨
          </Facilities>
          <Facilities>
            <GiJumpingDog style={{ fontSize: "25px" }} />
            ㅤ반려동물 환영
          </Facilities>
          <Facilities>
            <TbToolsKitchen2 style={{ fontSize: "25px" }} />
            ㅤ주방
          </Facilities>
          <OverComment>
            <p style={{ margin: "0px", padding: "13px 23px" }}>
              편의시설 20개 모두 보기
            </p>
          </OverComment>
        </Wrap>
        {/* 달력 */}
        <Wrap1>
          <div>
            <SleepP style={{ padding: "0px 0px 0px 0px", lineHeight: "25px" }}>
              체크인 날짜를 선택해주세요.
            </SleepP>
            <IntroP>여행 날짜를 입력하여 정확한 요금을 확인하세요.</IntroP>
          </div>
          <Calender />
          <Cfooter>
            <div style={{ marginLeft: "24px", width: "16px" }}>
              <FaRegKeyboard style={{ fontSize: "25px" }} />
            </div>
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
  margin: 20px 0;
`;

const Cfooter = styled.div`
  justify-content: space-between;
  display: flex;
  width: 695px;
`;

const Del = styled.div`
  margin-top: 5px;
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
