import React from "react";
import styled from "styled-components";
import Mountain from "../../images/mountain.jpg";

const TitleImg = () => {
  return (
    <>
      <ImgBox>
        <BigImg src={Mountain}></BigImg>
        <SmallBox>
          <SmallImg src={Mountain} />
          <SmallBoxBot>
            <SmallImg src={Mountain} />
          </SmallBoxBot>
        </SmallBox>
        <SmallBox>
          <SmallImgR src={Mountain} />
          <SmallBoxBot>
            <SmallImgRB src={Mountain} />
          </SmallBoxBot>
        </SmallBox>
      </ImgBox>
    </>
  );
};

export default TitleImg;

const ImgBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding-top: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1016px) {
    width: 100%;
    height: 10%;
    flex-wrap: unset;
  }
`;

const SmallBox = styled.div`
  padding-left: 8px;
`;

const SmallBoxBot = styled.div`
  padding-top: 8px;
`;

const BigImg = styled.div`
  width: 560px;
  height: 458px;
  border-radius: 20px 0px 0px 20px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
  @media screen and (max-width: 1016px) {
    border-radius: 20px;
    width: 100%;
  }
`;

const SmallImg = styled.div`
  width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
  @media screen and (max-width: 1016px) {
    display: none;
  }
`;
const SmallImgR = styled.div`
  width: 272px;
  height: 225px;
  border-radius: 0px 20px 0px 0px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
  @media screen and (max-width: 1016px) {
    display: none;
  }
`;

const SmallImgRB = styled.div`
  width: 272px;
  height: 225px;
  border-radius: 0px 0px 20px 0px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
  @media screen and (max-width: 1016px) {
    display: none;
  }
`;
