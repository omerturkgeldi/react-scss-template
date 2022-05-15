import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import App from "../App"
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (

        <div role="navigation">
            <h1>Layout</h1>

            <BrowserRouter>

                <Navbar />


                <Routes>
                    <Route path='hi' element={<h1>Hi</h1>}></Route>
                    <Route path="/" element={<h1>boşş</h1>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/rakip-bul' element={<h1>Rakip Bul</h1>} />

                    <Route path='/etkinlikler' element={<h1>Etkinlikler</h1>} />


                    <Route path='/mesajlar' element={<h1>Mesajlar</h1>} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default MainLayout