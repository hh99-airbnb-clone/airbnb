import React from "react";
import { Route, Routes } from "react-router-dom";

//컴포넌트
import Header from "./components/Header";
import DetailAccommodation from "./pages/DetailAccommodation";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<DetailAccommodation />} />
        </Route>
        <Route path="/PostAdd" element={<PostAdd />} />
      </Routes>
    </>
  );
}
export default App;
