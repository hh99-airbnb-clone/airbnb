import React from "react";
import {Route,Routes} from "react-router-dom"
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";



function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/PostAdd" element={<PostAdd />} />
        </Routes>
      </>
  );
}



export default App;
