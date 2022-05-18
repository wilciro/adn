// React
import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import { LoginPage } from 'pages/Login';
import LandingPage from 'pages/Landing';
import { RequestsListPage } from 'pages/RequestsList';

const CustomRoutes: FC = () => {

  const logged = true;

  return (
    <Routes>      
        <Route
            path="/404"
            element={<LandingPage />}
        />
        <Route
            path="/login"
            element={ logged ?  <LoginPage /> : <Navigate to="/dashboard" /> }
        />
        <Route
            path="/dashboard"
            element={ logged ?  <RequestsListPage /> : <Navigate to="/login" /> }
        />
        <Route
            path="/"
            element={<LandingPage />}
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default CustomRoutes