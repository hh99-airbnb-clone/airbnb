import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __signup } from '../redux/modules/user';

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickname, setNickname] = useState('');

    const emailCheck = (email) => {
        let reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
        return reg.test(email);
    };

    //비밀번호 영문/숫자 포함(8_20자)
    const passwordCheck = (password) => {
        let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        return _reg2.test(password);
    };

    // 닉네임 영문/숫자 -,_ 포함
    const nicknameCheck = (nickname) => {
        let reg3 = /^[0-9a-zA-z+_-]+$/;
        return reg3.test(nickname);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!email || !nickname || !password || !password2) {
            return window.alert('내용을 입력하세요');
        }
        if (!emailCheck(email)) {
            window.alert('이메일을 형식에 맞게 입력해주세요.');
            return;
        }
        if (!passwordCheck(password)) {
            window.alert('비밀번호를 형식에 맞게 입력해주세요');
        }
        if (!nicknameCheck(nickname)) {
            window.alert('닉네임을 형식에 맞게 입력해주세요');
        }
        if (password !== password2) {
            return window.alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }
        dispatch(__signup(email, nickname, password));
    };

    return (
        <div>
            <div onSubmit={handleSignUp}>
                <h1>회원가입</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <input
                        id="id"
                        type="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="이메일을 다시확인해 주세요."
                    />
                    <button onClick={emailCheck}>아이디체크</button>
                </label>
                <label htmlFor="nic">
                    <p>닉네임</p>
                    <input
                        id="nic"
                        required
                        onChange={(e) => {
                            setNickname(e.target.value);
                        }}
                        placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요"
                    />
                    <button onClick={nicknameCheck}>닉네임체크</button>
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
                        placeholder="비밀번호 영문/숫자 포함(8_20자) 작성해 주세요"
                    />
                </label>
                <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                    <input
                        id="pw2"
                        type="password"
                        required
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        placeholder="비밀번호 한 번 더 입력해 주세요"
                    />
                </label>
                <button type="submit">회원가입</button>
                <div>계정이 있으신가요?</div>
                <button onClick={() => navigate('/login')}>로그인</button>
            </div>
        </div>
    );
}

export default Signup;
