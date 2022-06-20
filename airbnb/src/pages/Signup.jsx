import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __signup, __emailCheck, __nickNameCheck } from '../redux/modules/user';
import styled from 'styled-components';

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickName, setNickName] = useState('');

    const reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

    // const submit = () => {
    //     if (reg.test(email.current.value)) {
    //         console.log(email);
    //         dispatch(
    //             __signup({
    //                 email: email.current.value,
    //                 nickname: nickName.current.value,
    //                 password: password.current.value,
    //                 passwordCheck: passwordCheck.current.value,
    //             })
    //         );
    //         navigate('/login');
    //     } else {
    //         alert('다시 확인해 주세요.');
    //     }
    // };

    //비밀번호 영문/숫자 포함(8_20자)
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
        // if (!email || !nickName || !password || !password2) {
        //     return window.alert('내용을 입력하세요');
        // }
        // if (!emailCheck(email)) {
        //     window.alert('이메일을 형식에 맞게 입력해주세요.');
        //     return;
        // }
        // if (!passwordCheck(password)) {
        //     window.alert('비밀번호를 형식에 맞게 입력해주세요');
        // }
        // if (!nickNameCheck(nickName)) {
        //     window.alert('닉네임을 형식에 맞게 입력해주세요');
        // }
        // if (password !== password2) {
        //     return window.alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        // }
        dispatch(__signup({ email, nickName, password }));
    };

    return (
        <Wrap>
            <Container onSubmit={handleSignUp}>
                <h1>회원가입</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <Input
                        id="id"
                        type="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(email);
                        }}
                        placeholder="이메일을 다시확인해 주세요."
                    />
                    <button onClick={emailCheck}>아이디체크</button>
                </label>
                <label htmlFor="nic">
                    <p>닉네임</p>
                    <Input
                        id="nic"
                        required
                        onChange={(e) => {
                            setNickName(e.target.value);
                        }}
                        placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요"
                    />
                    <button onClick={nickNameCheck}>닉네임체크</button>
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input
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
                    <Input
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
            </Container>
        </Wrap>
    );
}

export default Signup;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

const Container = styled.div`
    width: 500px;
    height: 660px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px 20px;
`;
// const Title = styled.h4`
//     text-align: center;
// `;
// const Br = styled.br`
//     color: black;
// `;
const Input = styled.input`
    width: 97%;
    height: 45px;
    margin: 0px;
    align-items: center;
    border-radius: 7px;
`;
// const Kid = styled.div`
//     font-size: 11px;
// `;
// const ButtonLogin = styled.button`
//     width: 97%;
//     height: 40px;
//     border: transparent;
//     border-radius: 5px;
//     margin: 10px 5px;
//     color: white;
//     font-size: 16px;
//     background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(255, 37, 37, 1) 78%, rgba(252, 176, 69, 1) 100%);
// `;

// const ButtonSignUp = styled.button`
//     width: 97%;
//     height: 40px;
//     border: transparent;
//     border-radius: 5px;
//     margin: 10px 5px;
//     color: white;
//     font-size: 16px;
//     background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(255, 37, 37, 1) 78%, rgba(252, 176, 69, 1) 100%);
// `;
