import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { __signup, __emailCheck, __nickNameCheck } from '../redux/modules/user';
import '../css/Singup.css';

function Signup({ closeSignup, setLogIn }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickName, setNickName] = useState('');

    const reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

    //비밀번호 영문/숫자 포함(8_20자)
    const goTotheLogin = () => {
        closeSignup(false);
        setLogIn(true);
    };

    const passwordCheck = (password) => {
        let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        return _reg2.test(password);
    };

    const emailCheck = () => {
        console.log(email);
        dispatch(
            __emailCheck({
                email: email,
            })
        );
    };

    // 닉네임 체크
    const nickNameCheck = () => {
        dispatch(
            __nickNameCheck({
                nickname: nickName,
            })
        );
        if (nickName.length > 13) {
            alert('닉네임이 12자 내로 입력하세요');
        }
    };

    const handleSignUp = (e) => {
        console.log(email);
        e.preventDefault();
        if (!email || !nickName || !password || !password2) {
            return window.alert('내용을 입력하세요');
        }

        if (!passwordCheck(password)) {
            window.alert('비밀번호를 형식에 맞게 입력해주세요');
        }

        if (password !== password2) {
            return window.alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }
        dispatch(__signup({ email, nickName, password }));
    };

    return (
        <div className="Wrap">
            <form className="Container" onSubmit={handleSignUp}>
                <button className="ButtonClose" onClick={() => closeSignup(false)}>
                    X
                </button>
                <div className="Title1">회원가입</div>
                <label htmlFor="id">
                    <input
                        className="Input"
                        id="id"
                        type="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(email);
                        }}
                        placeholder="이메일을 다시확인해 주세요."
                    />
                    <button className="check" onClick={emailCheck}>
                        이메일 체크
                    </button>
                </label>
                <label htmlFor="nic">
                    <input
                        className="Input"
                        id="nic"
                        required
                        onChange={(e) => {
                            setNickName(e.target.value);
                        }}
                        placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요"
                    />
                    <button className="check" onClick={nickNameCheck}>
                        닉네임 체크
                    </button>
                </label>
                <label htmlFor="pw">
                    <input
                        className="Input"
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
                    <input
                        className="Input"
                        id="pw2"
                        type="password"
                        required
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        placeholder="비밀번호 한 번 더 입력해 주세요"
                    />
                </label>
                <button className="ButtonSignUp1" type="submit">
                    회원가입
                </button>
                <div>계정이 있으신가요?</div>
                <button className="ButtonLogin1" onClick={goTotheLogin}>
                    로그인
                </button>
            </form>
        </div>
    );
}

export default Signup;
