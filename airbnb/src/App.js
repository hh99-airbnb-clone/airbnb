import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
//컴포넌트

import DetailAccommodation from "./pages/DetailAccommodation";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<DetailAccommodation />} />
        </Route>
        <Route path="/PostAdd" element={<PostAdd />} />
      </Routes>
    </>
  );
}
export default App;
