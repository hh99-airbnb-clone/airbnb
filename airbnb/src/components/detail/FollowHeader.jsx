import React from "react";
import styled from "styled-components";

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
    <div>
      {ScrollActive ? (
        <FixedNav>
          <FixdeNavtextBox>
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
          </FixdeNavtextBox>
        </FixedNav>
      ) : null}
    </div>
  );
};
// 2962
export default FollowHeader;

const FixedNav = styled.div`
  width: 100%;
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
`;

const NavMenu = styled.div`
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 550 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  margin-right: 25px;
  padding: 30px 0px;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid #222222;
  }
`;
