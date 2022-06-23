//카테고리 컴포넌트

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/SlickCategory.css'
import styled from 'styled-components'
import { GiIsland, GiCampingTent, GiForestCamp, GiSurfBoard } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle, TbBuildingCarousel } from 'react-icons/tb'
import { BsToggles2 } from "react-icons/bs";
import { RiCactusLine } from "react-icons/ri";
import { MdHouseboat, MdApartment, MdHotel, MdHome, MdOutlineHolidayVillage, MdOutlineCottage, MdSportsGolf, MdKitesurfing, MdDownhillSkiing } from 'react-icons/md'
import { useDispatch } from "react-redux";
import {getCookie} from "../../shared/cookie"
import { __loadPosts } from "../../redux/modules/post";

const SlickCategory = (props) => {

  const dispatch = useDispatch();

  const token = getCookie("Authorization")

  const selectCategory = (category) => {
    dispatch(__loadPosts(token, category))
  }

  return (
    <div>
      <Container>
        <Slider {...settings} style={{ width: '70%', margin: 'auto' }}>
          <div>
              <Item style={{ color: '#717171' }} onClick={()=>{selectCategory("펜션")}}>
                <MdOutlineCottage style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span style={{ color: '#717171' }}>펜션</span>
              </Item>
          </div>
          <div>
              <Item style={{ color: '#717171' }} onClick={()=>{selectCategory("호텔")}}>
                <MdHotel style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span style={{ color: '#717171' }}>호텔</span>
              </Item>
          </div>
          <div>
              <Item style={{ color: '#717171' }} onClick={()=>{selectCategory("아파트")}}>
                <MdApartment style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span style={{ color: '#717171' }}>아파트</span>
              </Item>
          </div>
          <div>
              <Item style={{ color: '#717171' }} onClick={()=>{selectCategory("주택")}}>
                <MdHome style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span style={{ color: '#717171' }}>주택</span>
              </Item>
          </div>
          <div>
              <Item style={{ color: '#717171' }} onClick={()=>{selectCategory("게스트 하우스")}}>
                <MdOutlineHolidayVillage style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>게하</span>
              </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <GiIsland style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>섬</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <TbBeach style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>해변 근처</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <GiCampingTent style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>캠핑장</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <MdHouseboat style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>하우스보트</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <TbBuildingCastle style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>캐슬</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <MdSportsGolf style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>골프</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <MdKitesurfing style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>서핑</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <MdDownhillSkiing style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>스키</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <TbBuildingCarousel style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>놀이공원</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <GiForestCamp style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>캠핑</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <RiCactusLine style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>사막</span>
            </Item>
          </div>
          <div>
            <Item style={{ color: '#717171' }}>
              <GiSurfBoard style={{ width: '30px', height: '30px', margin: 'auto' }} />
              <span>서핑</span>
            </Item>
          </div>
        </Slider>
        <FilterBox style={{marginLeft : '10px'}}>
          <BsToggles2 style={{ color: 'black', margin: '13px', fontSize:'16px'}} />
          <span style={{ color: 'black' }}>필터</span>
        </FilterBox>
      </Container>
    </div>
  );
}

export default SlickCategory;

const Container = styled.div`
display: flex ;
justify-content: center;
align-content: center;
width: 100%;
background-color: white;
color: #717171;
`

const Item = styled.div`
display: flex;
flex-direction: column;
text-align: center;
cursor: pointer;
margin-right : 50px;
&:hover{
text-decoration: underline;
color: black !important;
}`

const FilterBox = styled.div`
border: 1px solid #717171;
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
border-radius: 15px;
width: 90px;
height: 50px;
margin-right: auto ;
font-size: 15px;
`

//카테고리 스타일을 조정할 수 있는 코드입니다. ex)한 페이지에 보이는 카테고리 갯수!!
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};