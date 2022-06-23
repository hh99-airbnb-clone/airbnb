import React, { useEffect } from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { useSelector } from "react-redux";

const { kakao } = window;

const DetailMap = () => {
  const post_list = useSelector((state) => state.comment.posts);

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(post_list.address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다

        var content = `
        <div class="CustomOut">
          <div class="CustomMarker"/>
            </div>
            </div>`;

        var customOverlay = new kakao.maps.CustomOverlay({
          position: coords,
          content: content,
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        customOverlay.setMap(map);
      }
    });
  }, [post_list]);

  return (
    <MapAll>
      <h2 style={{ margin: "45px 0px 25px 0px" }}>호스팅 지역</h2>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "500px",
        }}
      ></div>

      {/* <Map
        // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "500px",
          margin: "0px 20px 30px 0px",
        }}
        level={3}
      >
        <CustomOverlayMap position={{ lat: 33.450701, lng: 126.570667 }}>
          <CustomOut>
            <CustomMarker>
              <ImHome
                style={{
                  // 지도의 크기
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "25px",
                  height: "25px",
                  margin: "15px auto",
                  color: "white",
                }}
              />
            </CustomMarker>
          </CustomOut>
        </CustomOverlayMap>
      </Map> */}
      <h4>{post_list.address}</h4>
      <p>{post_list.content}</p>
      <span
        style={{
          fontWeight: "600",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => {
          window.alert("comming soon");
        }}
      >
        <p
          style={{
            margin: "20px 0 60px 0",
          }}
        >
          더 보기
        </p>
      </span>
    </MapAll>
  );
};

export default DetailMap;

const MapAll = styled.div`
  border-top: 1px solid rgb(221, 221, 221);

  @media screen and (max-width: 1000px) {
    display: none;
  }

  p {
    width: 100%;
    margin: 0px 0px 5px 0px;
  }

  .CustomMarker {
    margin: auto;
    width: 56px;
    height: 56px;
    background-color: #e51d52;
    border-radius: 28px;
  }

  .CustomOut {
    display: flex;
    background-color: #e51d52;
    background-color: rgba(255, 0, 51, 0.176);
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }

  .ishome {
    z-index: 5000;
    width: 120px;
    height: 120px;
  }
`;
// const CustomMarker = styled.div`
//   margin: auto;
//   width: 56px;
//   height: 56px;
//   background-color: #e51d52;
//   border-radius: 28px;
// `;

// const CustomOut = styled.div`
//   display: flex;
//   background-color: #e51d52;
//   background-color: rgba(255, 0, 51, 0.176);
//   width: 120px;
//   height: 120px;
//   border-radius: 60px;
// `;
