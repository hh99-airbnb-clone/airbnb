//main 페이지

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../shared/cookie";
import { __loadPosts } from "../redux/modules/post";

//컴포넌트
import Footer from "../components/Main/Footer";
import SlickCategory from "../components/Main/SlickCategory";
import Header from "../../src/components/Header";

//css
import "../css/Main.css";
import { GoStar } from "react-icons/go";

const Main = () => {
  const { posts } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("Authorization");

  useEffect(() => {
    dispatch(__loadPosts(token));
  }, [dispatch, token]);

  if (!posts) return;
  return (
    <>
      <Header />
      <SlickCategory />
      <PostBox>
        {posts?.map((post) => {
          return (
            <Posts
              key={post.id}
              onClick={() => {
                navigate(`/detail/${post.id}`);
              }}
            >
              <img
                src={post?.photoUrls[0]}
                width="300px"
                height="300px"
                alt=""
              />
              <NameBox>
                <span>{post?.title}</span>
                <span className="right">
                  NEW
                  <GoStar style={{ width: "14px", marginRight: "2px" }} />
                </span>
              </NameBox>
              <span>₩{post?.fee}/박</span>
            </Posts>
          );
        })}
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
  margin-left: 60px;
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
