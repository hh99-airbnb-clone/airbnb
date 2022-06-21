import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { __loadPosts } from '../../redux/modules/post'
import { GiIsland, GiCampingTent } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle } from 'react-icons/tb'
import { MdHouseboat, MdApartment, MdHotel, MdHome, MdOutlineHolidayVillage, MdOutlineCottage } from 'react-icons/md'




const Category = () => {

  // const dispatch = useDispatch();

  const selectCategory = (category) => {
    // dispatch(__loadPosts("", category));
  }

  return (
    <>
      <Container>
        <Link to={'/Main'} style={{ textDecoration: 'none', color : 'black'}}>
          <Item style={{color: '#717171'}} onClick={selectCategory("pension")}>
          <MdOutlineCottage style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span style={{color: '#717171'}}>펜션</span>
          </Item>
        </Link>

        <Link to={'/Main'} style={{ textDecoration: 'none', color : 'black'}}>
          <Item style={{color: '#717171'}} onClick={selectCategory("hotel")}>
          <MdHotel style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span style={{color: '#717171'}}>호텔</span>
          </Item>
        </Link>

        <Link to={'/Main'} style={{ textDecoration: 'none', color : 'black' }}>
          <Item style={{color: '#717171'}} onClick={selectCategory("apartment")}>
          <MdApartment style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span style={{color: '#717171'}}>아파트</span>
          </Item>
        </Link>

        <Link to={'/Main'} style={{ textDecoration: 'none', color : 'black' }}>
          <Item style={{color: '#717171'}} onClick={selectCategory("house")}>
          <MdHome style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span style={{color: '#717171'}}>주택</span>
          </Item>
        </Link>

        <Link to={'/Main'} style={{ textDecoration: 'none', color : 'black' }}>
          <Item style={{color: '#717171'}} onClick={selectCategory("guestHouse")}>
          <MdOutlineHolidayVillage style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span>게하</span>
          </Item>
        </Link>

        <Item style={{color: '#717171'}}>
          <GiIsland style={{ width: '30px', height: '30px', margin : 'auto'  }} />
          <span>섬</span>
        </Item>

        <Item style={{color: '#717171'}}>
          <TbBeach style={{ width: '30px', height: '30px', margin : 'auto' }} />
            <span>해변 근처</span>
        </Item>

        <Item style={{color: '#717171'}}>
          <GiCampingTent style={{ width: '30px', height: '30px', margin : 'auto'  }} />
            <span>캠핑장</span>
        </Item>

        <Item style={{color: '#717171'}}>
          <MdHouseboat style={{ width: '30px', height: '30px', margin : 'auto' }} />
          <span>하우스보트</span>
        </Item>

        <Item style={{color: '#717171'}}>
          <TbBuildingCastle style={{ width: '30px', height: '30px', margin : 'auto' }} />
          <span>캐슬</span>
        </Item>

      </Container>
    </>
  )
}

export default Category

const Container = styled.div`
display: flex ;
justify-content: center;
align-content: center;
width: 100%;
position: fixed;
background-color: white;
`

const Item = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-right : 40px;
`