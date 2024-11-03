import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import RegisterPage from '../pages/homePage/RegisterPage';
import HomeLayout from '../layouts/HomeLayout';

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/register' element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;
