import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { api } from "../../shared/api";

//action
const ADD = "comment/ADD";
const LOAD = "comment/LOAD";

//action creator
const addComment = createAction(ADD, (comment) => ({ comment }));
const loadComments = createAction(LOAD, (comment) => ({ comment }));

//initialState
const initialState = {
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
export const __addComment = (payload) => async (dispatch, getState) => {
  try {
    const { data } = await api.post(
      `/api/accommodation/${payload.id}/comments`,
      payload
    );
    dispatch(addComment(data));
  } catch (e) {}
};

export const __loadComments = (id) => async (dispatch, getState) => {
  try {
    const { data } = await api.get(`/api/accommodation/${id}/comments`);
    dispatch(loadComments(data));
  } catch (e) {
    // console.log(`코멘트 불러오기 실패! ${e}`);
  }
};

//reducer

export default handleActions(
  {
    [ADD]: (state, action) => {
      console.log(action);
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };
    },
    [LOAD]: (state, action) => {
      return {
        ...state,
        commentAvgs: action.payload,
      };
    },
  },
  initialState
);

const commentActions = {
  __addComment,
  __loadComments,
};

export { commentActions };
