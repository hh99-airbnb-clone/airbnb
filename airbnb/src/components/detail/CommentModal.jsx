import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";

const CommentModal = ({ cModal, modalClose, comment_list }) => {
  const [searchbar, setSearchbar] = React.useState("");

  const handleform = (e) => {
    setSearchbar(e.target.value);
  };
  //모달 상태관리값을 props로 받아옴
  return cModal ? (
    <>
      <Overlay cModal={cModal}>
        <Container onClick={modalClose}>
          <Contents onClick={(e) => e.stopPropagation()}>
            <Search
              type="text"
              value={searchbar}
              onChange={handleform}
              placeholder="후기 검색"
            />
            {/* 모달창에서 자체 검색기능 자세한 이해 필요 */}
            {comment_list
              .filter((list) => {
                if (searchbar === "") {
                  return list;
                } else if (
                  list.content.toLowerCase().includes(searchbar.toLowerCase())
                )
                  return list;
              })
              .map((data, index) => {
                return <CommentBox data={data} cModal={cModal} />;
              })}
          </Contents>
        </Container>
      </Overlay>
    </>
  ) : null;
};

export default CommentModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  position: relative;
  top: 0px;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  text-align: center;
  width: 30%;
  height: 600px;
  overflow: auto;
`;

const Search = styled.input`
  justify-content: center;
  position: relative !important;
  cursor: text !important;
  display: flex !important;
  min-height: unset !important;
  width: 90% !important;
  margin: 15px 0px 60px 10px;
  border: none !important;
  color: rgb(34, 34, 34) !important;
  background-color: rgb(247, 247, 247) !important;
  height: unset !important;
  align-items: center !important;
  padding: 12px 12px 12px 16px !important;
  border-radius: 100px !important;
  box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset !important;
`;
