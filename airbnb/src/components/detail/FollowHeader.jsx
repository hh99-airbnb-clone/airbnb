import React from "react";
import styled from "styled-components";
import { GoStar } from "react-icons/go";

const FollowHeader = () => {
  const [ScrollY, setScrollY] = React.useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = React.useState(false);
  const [ScrollButton, setScrollButton] = React.useState(false);

  function handleScroll() {
    if (ScrollY > 599) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    }
    if (ScrollY <= 599) {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
    if (ScrollY >= 2500) {
      setScrollY(window.pageYOffset);
      setScrollButton(true);
    }
    if (ScrollY < 2500) {
      setScrollY(window.pageYOffset);
      setScrollButton(false);
    }
  }
  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <Wrap>
      {ScrollActive ? (
        <FixedNav>
          <FixdeNavtextBox>
            <NavAll>
              <NavMenu
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                사진
              </NavMenu>
              <NavMenu
                onClick={() => {
                  window.scrollTo({ top: 1550, left: 0, behavior: "smooth" });
                }}
              >
                편의시설
              </NavMenu>
              <NavMenu
                onClick={() => {
                  window.scrollTo({ top: 2255, left: 0, behavior: "smooth" });
                }}
              >
                후기
              </NavMenu>
              <NavMenu
                onClick={() => {
                  window.scrollTo({ top: 2900, left: 0, behavior: "smooth" });
                }}
              >
                위치
              </NavMenu>
            </NavAll>
            {ScrollButton ? (
              <NavBtn>
                <NavBtnText>
                  <span>
                    <span
                      style={{
                        fontWeight: "600",
                        marginLeft: "4px",
                        fontSize: "18px",
                        color: "#000000",
                      }}
                    >
                      ₩203,052
                    </span>
                    <span
                      style={{
                        fontWeight: "500",
                        marginLeft: "4px",
                        fontSize: "14px",
                        color: "#000000",
                      }}
                    >
                      /박
                    </span>
                  </span>
                  <span style={{ display: "flex" }}>
                    <span style={{ marginTop: "3px" }}>
                      <GoStar
                        style={{
                          width: "10px",
                          marginRight: "3px",
                          paddingTop: "5px",
                        }}
                      />
                    </span>
                    <p
                      style={{ margin: "3px 5px 24px 0px", fontWeight: "500" }}
                    >
                      <span style={{ fontSize: "12px" }}> 4.76 ·</span>
                      <span
                        style={{
                          fontWeight: "600",
                          textDecoration: "underline",
                          marginLeft: "4px",
                          fontSize: "12px",
                          color: "#6f6f6f",
                        }}
                      >
                        후기 3개
                      </span>
                    </p>
                  </span>
                </NavBtnText>
                <PinkButton
                  onClick={() => {
                    window.alert("comming soon");
                  }}
                >
                  예약 하기
                </PinkButton>
              </NavBtn>
            ) : null}
          </FixdeNavtextBox>
        </FixedNav>
      ) : null}
    </Wrap>
  );
};
// 2962
export default FollowHeader;

const Wrap = styled.div`
  width: 1000px;
  display: flex;
`;

const FixedNav = styled.div`
  width: 80%;
  top: 0;
  min-width: 100vw;
  border-radius: 0;
  background-color: white;
  position: fixed;
  height: 80px;
  border-bottom: 1px solid #dddddd;
  z-index: 99;
`;

const FixdeNavtextBox = styled.div`
  width: 1180px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
  height: 80px;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  width: 10%;
  color: #222222;
  font-weight: 550 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  text-align: center;
  margin-right: 25px;
  padding: 30px 0px;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid #222222;
  }
`;
const NavAll = styled.div`
  width: 50%;
  display: flex;
`;

const NavBtn = styled.div`
  width: 300px;
  display: flex;
`;

const NavBtnText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 18px 0 0;
`;

const PinkButton = styled.button`
  width: 110px;
  margin: 14px 0px;
  height: 48px;
  padding: 0px;
  background: rgb(229, 29, 82);
  background: linear-gradient(
    90deg,
    rgba(229, 29, 82, 1) 0%,
    rgba(255, 0, 108, 1) 68%,
    rgba(240, 88, 29, 1) 100%
  );
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 550;
  align-items: center;
  cursor: pointer;
`;
