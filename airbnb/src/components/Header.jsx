import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { __logOut } from '../redux/modules/user';

const Header = () => {
    const dispatch = useDispatch();
    const login = window.localStorage.getItem('token');
    console.log(login);
    const nickname = window.localStorage.getItem('nickname');

    const isLogOutHandler = () => {
        dispatch(__logOut());
        alert('로그아웃 되었습니다.');
    };

    return (
        <StHeader>
            <StLink to={'/'}>
                <StImg src={logo} />
            </StLink>
            <div>
            </div>
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
                        <Link to={'/Login'}>
                            <StBtn>로 그 인</StBtn>
                        </Link>
                        <Link to={'/Signup'}>
                            <StBtn>회원가입</StBtn>
                        </Link>
                    </>
                )}
            </StLogInDiv>
        </StHeader>
    );
};

export default Header;

const StHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    min-height: 150px;
    margin: 30px 0px;
    background-color: white;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StImg = styled.img`
    width: 150px;
    height: 50px;
    margin: 20px;
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
