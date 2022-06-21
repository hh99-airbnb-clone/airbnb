import React from "react";
import styled from "styled-components";
import Follow from "./Follow";
import TitleBox from "./TitleBox";
import DetailContent from "./DetailContent";

const Introduce = () => {
  return (
    <IntroContainer>
      <div>
        <TitleBox />
        <DetailContent />
      </div>
      <div>
        <Follow />
      </div>
    </IntroContainer>
  );
};

export default Introduce;

const IntroContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;
