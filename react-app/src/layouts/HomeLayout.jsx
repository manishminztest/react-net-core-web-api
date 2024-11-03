import { Container } from '@mui/material';
import React from 'react';
import HomeNavbar from '../features/navbar/HomeNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <Container fluid>
                <HomeNavbar />
                <Container sx={{ my: 10 }}>
                    <Outlet />
                </Container>
            </Container>
        </>
    )
}

export default HomeLayout;
