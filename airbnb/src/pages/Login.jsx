import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __login } from '../redux/modules/user';
import { KAKAO_AUTH_URL } from '../shared/Kakao';
import { CloseButton } from 'react-bootstrap';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (email === '' || password === '') {
            window.alert('이메일, 비밀번호 모두 입력해주세요.');
        }
        dispatch(__login({ email, password }));
    };
    return (
        <Wrap>
            <Container>
                <CloseButton />
                <Title>로그인 또는 회원가입</Title>
                <Br />
                <label htmlFor="id">
                    <h2>에어비앤비에 오신 것을 환영합니다.</h2>
                    <Input
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
                    <Input
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
                <Kid>이메일로 확인합니다. 이메일 확인 갈줄 알았죠? 이메일은 확인안합니다. 그래서 요금도 안나가죠.</Kid>
                <div>개인정보처리방침</div>
                <ButtonLogin onClick={handleLogin}>계속</ButtonLogin>

                <KakaoWrap>
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
                </KakaoWrap>
                <p>계정이 있신가요?</p>

                <ButtonSignUp
                    onClick={() => {
                        navigate('/signup');
                    }}
                >
                    회원가입
                </ButtonSignUp>
            </Container>
        </Wrap>
    );
};

export default Login;

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
const Title = styled.h4`
    text-align: center;
`;
const Br = styled.br`
    color: black;
`;
const Input = styled.input`
    width: 97%;
    height: 45px;
    margin: 0px;
    align-items: center;
    border-radius: 7px;
`;
const Kid = styled.div`
    font-size: 11px;
`;
const ButtonLogin = styled.button`
    width: 97%;
    height: 40px;
    border: transparent;
    border-radius: 5px;
    margin: 10px 5px;
    color: white;
    font-size: 16px;
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(255, 37, 37, 1) 78%, rgba(252, 176, 69, 1) 100%);
`;

const ButtonSignUp = styled.button`
    width: 97%;
    height: 40px;
    border: transparent;
    border-radius: 5px;
    margin: 10px 5px;
    color: white;
    font-size: 16px;
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(255, 37, 37, 1) 78%, rgba(252, 176, 69, 1) 100%);
`;
const KakaoWrap = styled.div`
    width: 97%;
    height: 40px;

    margin: 10px 5px;
    border-radius: 5px;
    background-color: #ffe926;

    display: flex;
    justify-content: center;
    align-items: center;
`;
