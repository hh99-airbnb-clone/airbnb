import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//컴포넌트
import Login from './pages/Login';
import Signup from './pages/Signup';
import DetailAccommodation from './pages/DetailAccommodation';
import Main from './pages/Main';
import PostAdd from './pages/PostAdd';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />

                <Route path="/" element={<Main />} />
                <Route path="/PostAdd" element={<PostAdd />} />
                <Route path="/detail" element={<DetailAccommodation />} />
            </Routes>
        </>
    );
}
export default App;
