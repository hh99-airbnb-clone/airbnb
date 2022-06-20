import React from 'react'
import pension from '../../asset/펜션.png'
import hotel from '../../asset/hotel.png'
import apartment from '../../asset/아파트.png'
import house from '../../asset/주택.png'
import guestHouse from '../../asset/게하.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
      <Container>
        <Link to={'/Main'} style={{textDecoration : 'none', color : '#717171'}}>
          <Item style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={pension} alt='' style={{ width: '40px', height: '40px' }} />
            <span>펜션</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{textDecoration : 'none', color : '#717171'}}>
          <Item style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={hotel} alt='' style={{ width: '40px', height: '40px' }} />
            <span>호텔</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{textDecoration : 'none', color : '#717171'}}>
          <Item style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={apartment} alt='' style={{ width: '40px', height: '40px' }} />
            <span>아파트</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{textDecoration : 'none', color : '#717171'}}>
          <Item style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={house} alt='' style={{ width: '40px', height: '40px' }} />
            <span>주택</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{textDecoration : 'none', color : '#717171'}}>
          <Item style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={guestHouse} alt='' style={{ width: '40px', height: '40px' }} />
            <span>게하</span>
          </Item>
        </Link>
      </Container>
    </>
  )
}

export default Category

const Container = styled.div`
display: flex ;
justify-content: center;
align-content: center;
position: fixed;
left: 40%;
padding-top: 40px;
background-color: white;
`

const Item = styled.div`
text-align: center;
margin-right : 40px;
`