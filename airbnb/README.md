# 항해99 7기 4조 airbnb clone project - frontend✈️

# 👏 프로젝트 소개

2년 동안 코로나 바이러스로 인해 여행을 못 간 지금!!
<br>
<br>
요즘 코로나 바이러스가 예전에 비해 잠잠해지면서 여행을 떠나는 사람들이 많아지고 있습니다. 
<br>
<br>
여행을 간다면 반드시 필요한 숙소!!!
<br>
<br>
우리 팀은 여행에서 가장 중요한 숙소를 예약할 수 있는 Airbnb 사이트를 클론 코딩하기로 했습니다.

# ****⚙️**** 프로젝트 개요

- 프로젝트명 : Airbnb Clone Project
- 개발 인원 : 프론트(React) 3명, 백엔드(Spring) 4명
- 개발 기간 : 2022.06.17~ 2022.06.23
- 개발 환경 : Springboot 2.6.8, JDK 8, Spring Security, Spring JPA, React, React-Redux
- 배포 환경 : Gradle, AWS S3, AWS EC2
- 웹 서버 : Tomcat 9.0.63
- 데이터베이스 : MySQL 8.0.29 (AWS RDS)
- 협업 도구 : Git, Slack, Notion

>**[Back-End Repository](https://github.com/Son-Gyeongi/BE_airbnb_cloneProject)
><br>
>[시연영상 구경하기 - URL 바꿔야함](https://github.com/insidelamp)
><br>
>[팀 노션](https://smiling-level-1e8.notion.site/4-af2eb66124c34052844374cb4ff6294b)**


# ⭐️ 팀 구성
| 이름     | 깃허브 주소                                                | 포지션     |
|:--------:|:----------------------------------------------------------:|:-----------:|
| 김성영 | [https://github.com/sungyoungk](https://github.com/sungyoungk)                     | Backend     |
| 김재현   | [https://github.com/DubuKim](https://github.com/DubuKim)                     | Backend     |
| 손경이   | [https://github.com/Son-Gyeongi](https://github.com/Son-Gyeongi) | Backend     |
| 조윤상   | [https://github.com/bapunn](https://github.com/bapunn) | Backend     |
| 고백제   | [https://github.com/baeg-jae](https://github.com/baeg-jae)                     | Frontend |
| 김정욱   | [https://github.com/junguk11/TIL](https://github.com/junguk11/TIL)                     | Frontend |
| 장세화   | [saehwa95 (github.com)](saehwa95 (github.com))                     | Frontend |

<br>

# 💛 API 설계 및 와이어프레임 

- [Team Notion](https://smiling-level-1e8.notion.site/4-af2eb66124c34052844374cb4ff6294b)


# ****🧩 구현 기능****
### LOGIN
- 로그인 : 로그인 기능, 로그인 후 토큰 저장
- 회원가입 : 아이디/닉네임 중복확인, 비밀번호 일치 확인
- 로그아웃 : 토큰 삭제

### MAINPAGE
- 카테고리 : 카테고리 별 List load

### ADDPAGE
- 다중 이미지 업로드 기능 구현

### DETAILEPAGE
- 댓글 작성
- 댓글 리스트 모달 기능 구현
- 주소로 지도 표시 기능구현
- 평균 평점 기능 구현

# ****💡 Trouble Shooting****
- 클론 코딩을 하다보니까 비슷한 맥락의 여러가지 값을 받아와서 해야될 경우가 많았는데 코드간략화를 위해 변수를 활용해서 줄이려고 했지만 실패해서 매니저님의 조언으로 useReducer를 활용해서 코드 간략화 성공
- 지난 프로젝트를 진행해오면서 CSS작업량이 많지않아서 그런지 자잘자잘한 위치조정 밑 헤더가 따라오는 기능 등 모르면 못쓰는 CSS 부분이 생각보다 많아서 소요시간을 줄이기 위해 클론하면서 사용하고 어떤 방식을 써야하는지 공부하는식으로 해결
- useSelector 에서 값을 받아와서 넣을때 처음 랜더링 할때 할당된 값이 없어서 에러가 나는 상황 발생 useSelector 값이없을때는 페이지가 안나오게 조건문 설정해서 해결
- 모달창을 페이지 불러내기가 아닌 해더에 다 넣었을 경우 모덜창이 너무 커지고 중간에 창이 하나 더 생성되어 이부분을 해결하지 못하고 페이지 불러넣는 방식으로 진행
- dailog를 사용시 dailog는 z-index부분으로 해결
