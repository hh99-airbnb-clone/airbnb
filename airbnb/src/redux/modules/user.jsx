//user.js

import { api } from '../../shared/api';
import { setCookie, deleteCookie } from '../../shared/cookie';
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

// export const kakaoLogin = (code) => {
//     return async function (dispatch) {
//         try {
//             const kakaoLogin = await axios({
//                 url: `http://3.39.25.179:8080/oauth/kakao/callback?code=${code}`,
//             });
//             /* Token - Cookie */
//             const accessToken = kakaoLogin.headers.authorization.split(' ')[1];
//             setCookie('token', accessToken, {
//                 path: '/',
//                 expire: 'after60m',
//             });
//             dispatch(requestSuccess(true));
//             alert('로그인 성공!');
//         } catch (error) {
//             console.log('카카오 로그인 실패', error);
//         } finally {
//             dispatch(serverRequest(false));
//         }
//     };
// };

export const kakaoLogin = (code) => {
    console.log(code);
    return async function (dispatch) {
        await api
            .get(`/user/kakao/callback?code=${code}`, {})
            .then((kakaoLogin) => {
                const accessToken = kakaoLogin.headers.authorization.split(' ')[1];
                console.log(kakaoLogin);
                localStorage.setItem('token', kakaoLogin.headers.authorization);
                localStorage.setItem('email', code.email);
                localStorage.setItem('nickname', kakaoLogin.profile.nickname);
                dispatch(
                    logInUser({
                        login: true,
                        nickname: kakaoLogin.profile.nickname,
                        token: kakaoLogin.headers.authorization,
                    })
                );
                setCookie('token', accessToken, {
                    path: '/',
                    expire: 'after60m',
                });
                setCookie('nickname', kakaoLogin.profile.nickname);

                // window.location.assign('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('회원가입에 실패했습니다. 다시 시도해주세요');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __signup = (payload) => {
    console.log(payload);
    return async function (dispatch, getState) {
        await api
            .post('/signup', {
                email: payload.email,
                nickname: payload.nickName,
                // 뒤에보내줄 v값은
                password: payload.password,
            })
            .then((user) => {
                console.log(user);
                window.alert('회원가입이 완료되었습니다.');
                window.location.assign('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('회원가입에 실패했습니다. 다시 시도해주세요');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __login = (payload) => {
    return async function (dispatch) {
        await api
            .post('/login', {
                email: payload.email,
                password: payload.password,
            })
            .then((response) => {
                console.log(response);
                localStorage.setItem('accessToken', response.headers.authorization);
                localStorage.setItem('email', payload.email);
                localStorage.setItem('nickname', response.data.nickname);
                // dispatch(
                //     logInUser({
                //         email: payload.email,
                //         nickname: user.data.nickname,
                //     })
                // );
                // window.alert(`${user.data.nickname}님 환영합니다!`);
                // window.location.assign('/');
                dispatch(
                    logInUser({
                        login: true,
                        nickName: response.data.nickname,
                        token: response.headers.authorization,
                    })
                );
                setCookie('Authorization', response.headers.authorization.split(' ')[1]);
                setCookie('nickname', response.data.nickname);
                window.alert(`${response.data.nickname}님 환영합니다!`);
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

export const __emailCheck = (payload) => {
    return async function (dispatch, getState) {
        console.log(payload);
        await api
            .post('/signup/email', {
                email: payload.email,
            })
            .then((user) => {
                console.log(user);
                window.alert('사용가능한 이메일 입니다.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('사용할수 없는 이메일입니다.');
                console.log(errorCode, errorMessage);
            });
    };
};

export const __nickNameCheck = (payload) => {
    return async function (dispatch, getState) {
        console.log(payload);
        await api
            .post('/signup/nickname', {
                nickname: payload.nickname,
            })
            .then((user) => {
                console.log(user);
                window.alert('사용가능한 닉네임 입니다.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert('사용할수 없는 닉네임입니다.');
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
        deleteCookie('accessToken');
        localStorage.clear();
        dispatch(__login(false));
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
            return { ...state, idCheck: action.user };
        case NICKNAMECHECK:
            return { ...state, nickname: action.user };

        default:
            return state;
    }
}
