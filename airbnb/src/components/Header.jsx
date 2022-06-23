import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";
import { __logOut } from "../redux/modules/user";
import Modal from "react-modal";
import { useState } from "react";
import { __login } from "../redux/modules/user";
import { kakaoLogin } from "../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = window.localStorage.getItem("accessToken");
  const nickname = window.localStorage.getItem("nickname");

  const handleLogin = () => {
    if (email === "" || password === "") {
      window.alert("이메일, 비밀번호 모두 입력해주세요.");
    }
    dispatch(__login({ email, password }));
  };

  const isLogOutHandler = () => {
    dispatch(__logOut());
    alert("로그아웃 되었습니다.");
  };
  if (window.location.pathname === "/PostAdd") return null;

  return (
    <StHeader>
      <StLink to={"/"}>
        <StImg src={logo} />
      </StLink>
      <div></div>
      <StLogInDiv>
        {login ? (
          <>
            <Link to={"/PostAdd"}>
              <StBtn>
                <div>{nickname}</div> 호스트되기
              </StBtn>
            </Link>
            <StBtn onClick={isLogOutHandler}> 로그아웃</StBtn>
          </>
        ) : (
          <>
            <Link to={"/Login"}>
              <StBtn>로 그 인</StBtn>
              {/* onClick={() => setLoginModal(true)} */}
              {/* <Modal isOpen={loginModal}>
                            <Wrap>
                                <Container>
                                    <StImg style={{ width: '50px', height: '50px' }} src={ESC} />
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
                                    <Kid>
                                        이메일로 확인합니다. 이메일 확인 갈줄 알았죠? 이메일은 확인안합니다. 그래서
                                        요금도 안나가죠.
                                    </Kid>
                                    <div>개인정보처리방침</div>
                                    <ButtonLogin onClick={handleLogin}>계속</ButtonLogin>
                                    <p>계정이 있신가요?</p>
                                    <ButtonSignUp
                                    // onClick={() => {
                                    //     navigate('/signup');
                                    // }}
                                    >
                                        회원가입
                                    </ButtonSignUp>
                                </Container>
                            </Wrap>
                        </Modal> */}
            </Link>
            <Link to={"/Signup"}>
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
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(255, 37, 37, 1) 78%,
    rgba(252, 176, 69, 1) 100%
  );
`;

const ButtonSignUp = styled.button`
  width: 97%;
  height: 40px;
  border: transparent;
  border-radius: 5px;
  margin: 10px 5px;
  color: white;
  font-size: 16px;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(255, 37, 37, 1) 78%,
    rgba(252, 176, 69, 1) 100%
  );
`;
