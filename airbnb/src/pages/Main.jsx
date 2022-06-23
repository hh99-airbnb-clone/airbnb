//main 페이지

import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";
import { getCookie } from "../shared/cookie";
import { __loadPosts, __loadImages } from "../redux/modules/post";
import Footer from "../components/Main/Footer";
import Category from "../components/Main/Category";
import Header from "../../src/components/Header";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("Authorization");

  useEffect(() => {
    // dispatch(__loadPosts(token))
    dispatch(__loadPosts(token));
  }, [dispatch, token]);

  const { posts } = useSelector((state) => state.postReducer);
  // console.log(posts);

  return (
    <>
      <Link to={"/PostAdd"}>
        <button>호스팅하기</button>
      </Link>
      <Header style={{ position: "fixed" }} />
      <Category />
      <PostBox>
        {posts?.map((post) => (
          <Posts
            key={post.id}
            onClick={() => {
              navigate(`/detail/${post.id}`);
            }}
          >
            <img src={post.photoUrls[0]} width="300px" height="300px" />
            <NameBox>
              <span>{post.title}</span>
              <span className="right">4.94 ⭐</span>
            </NameBox>
            <span>₩{post.fee}/박</span>
          </Posts>
        ))}
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
