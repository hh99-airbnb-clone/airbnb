//main 페이지

import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Link to={'/DetailAccommodation'}>
      <button style={{ cursor: 'pointer' }}>
        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
        <p style={{ fontWeight: "13px" }}>제주도</p>
        <p>₩150,000/박</p>
        <p>4.94 ⭐</p>
      </button>
      </Link>
      <Link to={'/PostAdd'}>
        <button>호스팅하기</button>
      </Link>

    </>
  )
}

export default Main