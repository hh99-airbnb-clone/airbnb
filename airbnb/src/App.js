import React from "react";
import { Route, Routes } from "react-router-dom";

//컴포넌트
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailAccommodation from "./pages/DetailAccommodation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DetailAccommodation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default App;
