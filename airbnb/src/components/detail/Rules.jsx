import React from "react";
import styled from "styled-components";

import {
  BsClockFill,
  BsFillDoorOpenFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { GiHolyWater } from "react-icons/gi";
import { MdError } from "react-icons/md";

const Rules = (props) => {
  return (
    <>
      {/* 이용규칙 */}
      <Wrap>
        <CommentCnt style={{ margin: "0px 0px", paddingBottom: "24px" }}>
          알아두어야 할 사항
        </CommentCnt>
        <RuleFlex>
          <RuleBox>
            <Rule>숙소 이용규칙</Rule>
            <RuleFlex>
              <Iconz>
                <BsClockFill style={{ fontSize: "15px" }} />
              </Iconz>
              <RuleText>체크인: 오후 4:00 - 오전 12:00 </RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsClockFill style={{ fontSize: "15px" }} />
              </Iconz>
              <RuleText> 체크아웃 시간: 오전11:00</RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsFillDoorOpenFill />
              </Iconz>
              <RuleText> 키패드(으)로 셀프 체크인</RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
          <RuleBox>
            {/* 건강과 안전 */}
            <Rule>건강과 안전</Rule>
            <RuleFlex>
              <Iconz>
                <GiHolyWater style={{ fontSize: "18px" }} />
              </Iconz>
              <RuleText style={{ lineHeight: "20px", marginBottom: "3px" }}>
                에어비앤비의 사회적 거리 두기 및 관련
                <br />
                가이드라인이 적용됩니다.{" "}
              </RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <MdError style={{ fontSize: "18px", marginTop: "5px" }} />
              </Iconz>
              <RuleText> 화재경보기 없음</RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsFillCheckCircleFill />
              </Iconz>
              <RuleText> 일산화탄소 경보기 필요 없음</RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
          <RuleBox>
            {/* 환불정책 */}
            <Rule>환불 정책</Rule>
            <RuleFlex>
              <RuleText style={{ lineHeight: "22px" }}>
                이 숙박에 대한 취소 세부 내역을 확인하려면 여행
                <br />
                날짜를 입력하세요.
              </RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
        </RuleFlex>
      </Wrap>
    </>
  );
};

export default Rules;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  width: 100%;
  text-align: left;
  padding: 48px 0px;
`;
const RuleBox = styled.div`
  padding: 0px 8px;
  width: 378px;
`;

const RuleText = styled.div`
  line-height: 28px;
  color: #222222;
`;

const RuleFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Iconz = styled.span`
  margin-right: 16px;
  line-height: 28px;
`;

const SeeMore = styled.div`
  font-weight: 600;
  margin-top: 24px;
  text-decoration: underline;
`;

const CommentCnt = styled.div`
  font-size: 22px;
  color: #222222;
  margin-left: 8px;
  font-weight: 600;
`;

const Rule = styled.div`
  font-size: 16px;
  color: #222222;
  font-weight: 600;
  margin-bottom: 10px;
`;
