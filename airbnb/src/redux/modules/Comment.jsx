import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { api } from "../../shared/api";
import { getCookie } from "../../shared/cookie";

//action
const ADD = "comment/ADD";
const LOAD = "comment/LOAD";
const POSTLOAD = "post/LOAD";
const AVGLOAD = "avg/LOAD";

//action creator
const addComment = createAction(ADD, (comment) => ({ comment }));
const loadComments = createAction(LOAD, (comment) => ({ comment }));
const loadPosts = createAction(POSTLOAD, (post) => ({ post }));
const loadAvgs = createAction(AVGLOAD, (avgs) => ({ avgs }));

//initialState
const initialState = {
  posts: [
    {
      id: 1,
      nickname: "정욱",
      title: "title",
      house_name: "house_name",
      fee: "200,000￦",
      content: "content",
      address: "서울 관악구 청룡동",
      people: 4,
      wifi: false,
      parking: false,
      photoUrls: [],
      category: "주택",
      room: 2,
    },
  ],

  commentAvgs: [
    {
      checkinAvg: 5, //체크인
      cleanAvg: 5, //청결도
      accuracyAvg: 5, //정확도
      communicationAvg: 5, //5의사,소통
      locationAvg: 5, //위치
      satisfactionAvg: 5, //만족도,
      totalStar: 5,
      //위 6개를 전부 더해서 평균 낸 값( 소수점 2자리까지)
    },
  ],

  comments: [
    {
      createdAt: "2022-06-16",
      modifiedAt: "2022-06-16",
      id: 6, //코멘트 아이디
      accommodationId: 4,
      userId: 4,
      nickname: "nickname",
      comment: "댓글 테스트3",
    },
  ],
};

//Thunk function

//후기 작성
export const __addComment = (payload) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try {
    const response = await axios.post(
      `http://3.34.4.93/api/accommodations/${payload.id}/comments`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    dispatch(__loadAvgs(payload.id));
    dispatch(addComment(response.data));
  } catch (e) {
    console.log(e);
  }
};
// 후기 받아오기
export const __loadComments = (id) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try {
    const response = await axios.get(
      `http://3.34.4.93/api/accommodations/${id}/comments`,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );

    dispatch(loadComments(response.data));
  } catch (e) {
    console.log(e);
  }
};
// 상세페이지 받아오기
export const __loadPosts = (id) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try {
    const response = await axios.get(
      `http://3.34.4.93/api/accommodations/${id}`,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    dispatch(loadPosts(response.data));
  } catch (e) {
    console.log(e);
  }
};
// 후기 평점 받아오기
export const __loadAvgs = (id) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try {
    const response = await axios.get(
      `http://3.34.4.93/api/accommodations/${id}/comments/avgs`,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    dispatch(loadAvgs(response.data));
  } catch (e) {
    console.log(e);
  }
};

//reducer

export default handleActions(
  {
    [ADD]: (state, action) => {
      return {
        ...state,
        comments: state.comments.concat(action.payload.comment),
      };
    },
    [LOAD]: (state, action) => {
      return {
        ...state,
        comments: action.payload.comment,
      };
    },
    [POSTLOAD]: (state, action) => {
      return {
        ...state,
        posts: action.payload.post,
      };
    },
    [AVGLOAD]: (state, action) => {
      return {
        ...state,
        commentAvgs: action.payload.avgs,
      };
    },
  },
  initialState
);

const commentActions = {
  __addComment,
  __loadComments,
  __loadPosts,
  __loadAvgs,
};

export { commentActions };
