// React
import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import { LoginPage } from 'pages/Login';
import LandingPage from 'pages/Landing';

const CustomRoutes: FC = () => {
  return (
    <Routes>      
        <Route
            path={"/404"}
            element={<LandingPage />}
        />
        <Route
            path={"/login"}
            element={
              true ?  <LoginPage /> : <Navigate to={"/"} />
            }
        />
        <Route
            path={"/"}
            element={<LandingPage />}
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default CustomRoutes