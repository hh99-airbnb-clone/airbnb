import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailAccommodation from "./pages/DetailAccommodation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/detail:id" element={<DetailAccommodation />} />
      </Routes>
    </>
  );
}

export default App;
