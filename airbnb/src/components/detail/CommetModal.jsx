import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import KakaoMap from "./KakadMap";
import Host from "./Host";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import { GoStar } from "react-icons/go";

import { GiHolyWater } from "react-icons/gi";
import { MdError } from "react-icons/md";

const CommentModal = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.comment.list.post);
  const comment_list = useSelector((state) => state.comment.list.comment);

  const paramsId = useParams().postId;

  const [comment, setComment] = React.useState("");
  const [comModalOn, setcomModalOn] = React.useState(false);

  const openModal = () => {
    setcomModalOn(true);
    document.body.style.overflow = "hidden";
  };

  const closecomModal = (e) => {
    e.preventDefault();
    setcomModalOn(false);
    document.body.style.overflow = "unset";
  };

  const handleform = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      {/* <Modal
        comModalOn={comModalOn}
        closecomModal={closecomModal}
        comment_list={comment_list}
      /> */}
      {/* 코맨트 */}
      {/* <Wrap>
        <CommentTitle>
          <span>
            <GoStar
              style={{ color: "#ff385c", fontSize: "21px", marginTop: "5px" }}
            />
          </span>
          <CommentCnt>4.76 · 후기 {comment_list.length}개</CommentCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <InputCom type="text" value={comment} onChange={handleform} />
          <AddCom onClick={addComment}>작성하기</AddCom>
        </WriteComment>

        <CommentWrap 댓글들만 싸기>
          {comment_list.map((c, index) => {
            if (index < 6) return <CommentBox {...c} />;
          })}
        </CommentWrap>
        <OverComment onClick={openModal}>
          <p style={{ margin: "0px", padding: "13px 23px" }}>
            후기 {comment_list.length}개 모두 보기
          </p>
        </OverComment>
      </Wrap> */}

      {/* <Wrap>
        <Host {...post} />
      </Wrap>  */}
    </>
  );
};
export default CommentModal;
