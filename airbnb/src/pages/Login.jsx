import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __login } from '../redux/modules/user';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (email === '' || password === '') {
            window.alert('이메일, 비밀번호 모두 입력해주세요.');
        }
        dispatch(__login(email, password));
    };
    return (
        <div>
            <div>
                <h1>로그인</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <input
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
                    <p>비밀번호</p>
                    <input
                        id="pw"
                        required
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </label>
                <button onClick={handleLogin}>로그인</button>
                <p>계정이 있신가요?</p>
                <button
                    onClick={() => {
                        navigate('/signup');
                    }}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;
