import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../css/Login.css';
import { __login } from '../redux/modules/user';
// import { KAKAO_AUTH_URL } from '../shared/Kakao';

const Login = ({ closeLogin, setSignUp }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (email === '' || password === '') {
            window.alert('이메일, 비밀번호 모두 입력해주세요.');
        }
        dispatch(__login({ email, password }));
    };

    const goToTheSignup = () => {
        closeLogin(false);
        setSignUp(true);
    };
    return (
        <div className="Wrap">
            <div className="Container">
                <button className="ButtonClose" onClick={() => closeLogin(false)}>
                    X
                </button>
                <div className="Title">로그인 또는 회원가입</div>
                <br />
                <label htmlFor="id">
                    <h2>에어비앤비에 오신 것을 환영합니다.</h2>
                    <input
                        className="Input1"
                        id="id"
                        type="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="이메일을 확인해주세요."
                    />
                </label>
                <label htmlFor="pw">
                    <input
                        className="Input2"
                        id="pw"
                        required
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </label>
                <br />
                <div className="Kid">
                    이메일로 확인합니다. 이메일 확인 갈줄 알았죠? 이메일은 확인안합니다. 그래서 요금도 안나가죠. <br />
                    <br />
                </div>
                <div>개인정보처리방침</div>
                <button className="ButtonLogin" onClick={handleLogin}>
                    계속
                </button>

                {/* <div className="KakaoWrap">
                    <a href={KAKAO_AUTH_URL}>
                        <span
                            style={{
                                fontSize: '20px',
                                color: '#181700',
                            }}
                        >
                            카카오 로그인
                        </span>
                    </a>
                </div> */}
                <p>계정이 있신가요?</p>

                <button className="ButtonSignUp" onClick={goToTheSignup}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;
