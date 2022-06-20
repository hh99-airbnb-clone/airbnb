//main 페이지

import React from 'react'
import styled from "styled-components";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Main.css'
// import {getCookie} from "../shared/Cookie"
// import { __loadPosts } from '../redux/modules/post';
import Footer from '../components/Main/Footer';
import Category from '../components/Main/Category';

const Main = () => {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const token = getCookie("Authorization")

  // useEffect(() => {
  //   dispatch(__loadPosts(token))
  // }, [dispatch]);

  // const {posts} = useSelector((state) => state.postReducer);


    return (
      <>
      <div>
      <Link to={'/PostAdd'}>
          <button>호스팅하기</button>
        </Link>
      </div>

        {/* <PostBox>
          {posts?.map((post) => (
            <Posts 
            key={post.id} 
            onClick = {() => {
              navigate(`/detail/${post.id}`)
            }}
          >
            <img src={post.images[0]} />
            <NameBox>
              <span>{post.titleInputRef}</span>
              <span className='right'>4.94 ⭐</span>
            </NameBox>
              <span>₩{post.feeInputRef}/박</span>
            </Posts>
          ))}
        </PostBox> */}
        <Category />
        <Container>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        </Container>
        <Footer />
      </>
  )
}

export default Main;


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-content: center;
  margin-top: 10px;
  margin-left: 60px;
  padding: 100px;
`

const Item = styled.div`
  width: 300px;
  margin-top: 32px;

`

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
