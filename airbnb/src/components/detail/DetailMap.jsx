import React from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useSelector } from "react-redux";

const DetailMap = () => {
  const post_list = useSelector((state) => state.posts);

  if (!post_list) return;
  return (
    <MapAll>
      <h2 style={{ margin: "45px 0px 25px 0px" }}>호스팅 지역</h2>

      <Map
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
      </Map>
      <h4>El Nido, MIMAROPA, 필리핀</h4>

      <p>
        우리는 지역 어부들과 탈라카넨 섬을 공유하고 있습니다. 작은 어촌마을은
        언제 어디서나 방문할 수 있는 제주도의 서쪽에 위치해 있습니다!
      </p>
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
`;
const CustomMarker = styled.div`
  margin: auto;
  width: 56px;
  height: 56px;
  background-color: #e51d52;
  border-radius: 28px;
`;

const CustomOut = styled.div`
  display: flex;
  background-color: #e51d52;
  background-color: rgba(255, 0, 51, 0.176);
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
