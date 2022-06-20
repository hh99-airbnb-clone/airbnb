import axios from 'axios';
// import {getCookie} from "../../shared/Cookie";

//액션타입
const LOAD_POST = "LOAD_POST"
const ADD_POST = "ADD_POST"


//액션 크리에이터
const loadPost = (payload) => {
  return {type : LOAD_POST, payload};
};

const addPost = (payload) => {
  return {type : ADD_POST, payload};
};


//미들웨어
export const __loadPosts = (token) => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://15.164.50.132/api/accommodations", {
      headers : {
        Authorization : `Bearer ${token}`,
      }
    })
    //31번줄 들어오는 데이터 확인 후 추가 작성 필요
    dispatch(loadPost(response.data));
  } catch (error) {
    console.log(error);
  }
}

export const __addPost = (payload) => async (dispatch, getState) => {
//내가 보낼 데이터 값 확인하기
  console.log(payload)

  // 데이터 확인을 위한 코드입니다.
  // payload.formData.forEach((form,key)=>{
  //   console.log(payload.formData.get(key));
  // })

  // const myToken = getCookie("Authorization");
  try {
    const response = await axios.post(
      "http://3.34.4.93/api/accommodation", 
      payload.formData,
    {
      headers : {
      // Authorization : `Bearer ${myToken}`
      "Content-Type":"multipart/form-data",
      },
    });
    window.alert("호스팅이 완료되었습니다😀")
    dispatch(addPost(response.data))
  }catch (error) {
    console.log(error);
  }
}


//초기값
const initialState = {
  posts : [],
  loading : false,
  console : null,
  detail : null,
};

//리듀서
const postReducer = (state = initialState, action) => {
  switch (action.payload) {
    case LOAD_POST:
      console.log(action.payload);
      return { ...state, posts: action.payload };

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };


    default:
      return state;
  }
}

export default postReducer;
