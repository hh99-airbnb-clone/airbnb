import React from "react";
import { Route, Routes } from "react-router-dom";

//컴포넌트
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailAccommodation from "./pages/DetailAccommodation";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailAccommodation />} />
        <Route path="/PostAdd" element={<PostAdd />} />
      </Routes>
    </>
  );
}
export default App;
