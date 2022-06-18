//user.js

import { api } from "../../shared/api";

//actions
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const EMAILCHECK = 'user/EMAILCHECK';
const NICKNAMECHECK = 'user/NICKNAMECHECK';

const initialState = {
    user: { email: null, nickName: null },
    is_login: false,
};
//초기값을 null을 준팀

//action creators
export function logInUser(user) {
    return { type: LOGIN, user };
}
//payload를 주지않고 user로 줬다.
export function logOutUser(user) {
    return { type: LOGOUT, user };
}
export function emailCheckUser(user) {
    return { type: EMAILCHECK, user };
}
export function nickNameCheckUser(user) {
    return { type: NICKNAMECHECK, user };
}

//middlewares

export const __signup = (email, nickname, password) => {
    return async function (dispatch, getState) {
        console.log(__signup);
        await api
            .post('/post', {
                email: email,
                nickname: nickname,
                password: password,
            })
            .then((user) => {
                window.alert('회원가입이 완료되었습니다.');
                window.location.assign('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('회원가입에 실패했습니다. 다시 시도해주세요');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __login = (email, password) => {
    return async function (dispatch) {
        console.log(__login);
        await api
            .post('/login', {
                email: email,
                password: password,
            })
            .then((user) => {
                localStorage.setItem('token', user.data.token);
                localStorage.setItem('email', email);
                localStorage.setItem('nickname', user.data.nickname);
                dispatch(
                    logInUser({
                        email: email,
                        nickname: user.data.nickname,
                    })
                );
                window.alert(`${user.data.nickname}님 환영합니다!`);
                window.location.assign('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('로그인에 실패했습니다! 다시 시도해주세요');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __emailCheck = (email) => {
    return async function (dispatch, getState) {
        console.log(__emailCheck);
        await api
            .post('/signup/email', {
                email: email,
            })
            .then((user) => {
                window.alert('사용가능한 이메일 입니다.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __nickNameCheck = (nickname) => {
    return async function (dispatch, getState) {
        console.log(__nickNameCheck);
        await api
            .post('/signup/nickname', {
                nickname: nickname,
            })
            .then((user) => {
                window.alert('사용가능한 닉네임 입니다.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('');
                console.log(errorCode, errorMessage);
            });
    };
};
// export const __loginCheck = () => {
//     return function (dispatch) {
//         console.log(__loginCheck);
//         const email = localStorage.getItem('email');
//         const nickname = localStorage.getItem('nickname');
//         if (email) {
//             dispatch(logInUser({ email, nickname }));
//         }

// const tokenCheck = document.cookie;
// if (tokenCheck) {
//     dispatch(logInUser({email: email}))
// } else {
//     dispatch(logOutUser());
// }
//     };
// };

export const __logOut = () => {
    return function (dispatch) {
        console.log(__logOut);
        localStorage.clear();
        dispatch(logOutUser());
        window.location.assign('/');
    };
};

//reducer
export default function userReducer(state = initialState, action = {}) {
    console.log(action);
    switch (action.type) {
        case LOGIN:
            state.user = { ...action.user };
            state.is_login = true;
            return state;
        case LOGOUT:
            state.user = {};
            state.is_login = false;
            return state;
        case EMAILCHECK:
            return { ...state, idCheck: action.email };
        case NICKNAMECHECK:
            return { ...state, username: action.username, nickname: action.nickname };
        default:
            return state;
    }
}
