import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import line3 from '../images/line3.png';
import user from '../images/user.png';
import { Link } from 'react-router-dom';
import { __logOut } from '../redux/modules/user';
import { __login } from '../redux/modules/user';
import Login from '../pages/Login';
import { Outlet } from 'react-router';
import Signup from '../pages/Signup';

const Header = () => {
    const dispatch = useDispatch();


    //모덜연결해주는 useState
    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    // const [image, setImage] = useState(false)
    //로그인하였을때 해더부분에서 인식하게해주는 토큰, 닉네임은 노출
    const login = window.localStorage.getItem('token');
    console.log(login);

    const nickname = window.localStorage.getItem('nickname');

    const isLogOutHandler = () => {
        dispatch(__logOut());
        alert('로그아웃 되었습니다.');
    };

    return (
        <>
            <Wrap>
                <StHeader>
                    <StLink to={'/'}>
                        <StImg1 src={logo} />
                    </StLink>
                    <StLogInDiv>
                        {login ? (
                            <>
                                <Link to={'/PostAdd'}>
                                    <StBtn>
                                        <div>{nickname}</div> 호스트되기
                                    </StBtn>
                                </Link>
                                <StBtn onClick={isLogOutHandler}> 로그아웃</StBtn>
                            </>
                        ) : (
                            <>
                                <div>
                                    <StImgWrap>
                                        <StImgBox>
                                            <StImg2 src={line3} />
                                            <StImg3 src={user} />
                                        </StImgBox>
                                    </StImgWrap>

                                    <StBtn
                                        onClick={() => {
                                            setLogIn(true);
                                        }}
                                    >
                                        로 그 인
                                    </StBtn>
                                    {logIn && <Login closeLogin={setLogIn} setSignUp={setSignUp} />}

                                    <StBtn
                                        onClick={() => {
                                            setSignUp(true);
                                        }}
                                    >
                                        회원가입
                                    </StBtn>
                                    {signUp && <Signup closeSignup={setSignUp} setLogIn={setLogIn} />}
                                </div>
                            </>
                        )}
                    </StLogInDiv>
                </StHeader>
                <Outlet />
            </Wrap>
        </>
    );
};

export default Header;

const Wrap = styled.div`
    padding-top: 7%;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
`;

const StHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 8vh;
    min-height: 100px;
    margin: 30px 0px;
    background-color: white;
`;

const StLink = styled(Link)`
    text-decoration: none;
    padding: 0px 100px;
`;

const StImg1 = styled.img`
    width: 130px;
    height: 58px;
`;

const StImgWrap = styled.div`
    display: flex;
    justify-content: end;
`;
const StImgBox = styled.div`
    width: 90px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StImg2 = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 15px;
    background-color: white;
`;

const StImg3 = styled.img`
    width: 25px;
    height: 25px;
    background-color: white;
`;

const StBtn = styled.button`
    width: 95px;
    height: 100%;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 10px;

    border: none;
    transition: transform 0.3s ease-in-out;
    &:hover {
        background: #00000067;
        cursor: pointer;
        transform: translateY(-3px);

        height: 52px;
        border: 1px solid white;
    }
`;

const StLogInDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 70vw;
    min-width: 500px;
    height: 50px;
    margin-right: 7%;
    background: white;
`;
