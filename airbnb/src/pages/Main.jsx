//main 페이지

import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";
import {getCookie} from "../shared/cookie"
import { __loadPosts } from "../redux/modules/post";
import { GoStar } from "react-icons/go";
import Footer from "../components/Main/Footer";
import SlickCategory from "../components/Main/SlickCategory";
import Header from "../../src/components/Header";


const Main = () => {
  const { posts } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("Authorization")

useEffect(() => {
dispatch(__loadPosts(token))
}, [dispatch]);

  if (!posts) return;
  return (
    <>
      <Header/>
      <SlickCategory />
      <PostBox>
        {posts?.map((post) => 
        {
          return <Posts
          key={post.id}
          onClick={() => {
            navigate(`/detail/${post.id}`);
          }}
        >
          <img src={post?.photoUrls[0]} width="300px" height="300px" alt=""/>
          <NameBox>
            <span>{post?.title}</span>
            <span className="right">
              NEW 
              <GoStar style={{ width: "14px", marginRight: "2px"}} />
            </span>
          </NameBox>
          <span>₩{post?.fee}/박</span>
        </Posts>
        }
        )}
      </PostBox>
      <Footer />
    </>
  );
};

export default Main;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-content: center;
  margin-top: 10px;
  margin-left: 40px;
  padding: 100px;
`;

const Posts = styled.div`
  width: 300px;
  margin-top: 32px;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
