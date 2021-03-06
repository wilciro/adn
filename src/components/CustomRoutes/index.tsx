// React
import React, { FC, useContext } from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';

// Context
import { SessionContext } from 'context/SessionContext';

// Pages
import LandingPage from 'pages/Landing';
import RequestsListPage from 'pages/RequestsList';
import AboutPage from 'pages/About';
import LoginPage from 'pages/Login';

const CustomRoutes: FC = () => {
  const {
    data: { username },
  } = useContext(SessionContext);
  const logged = username ?? false;

  return (
    <Routes>
      <Route path="/404" element={<LandingPage />} />
      <Route
        path="/login"
        element={!logged ? <LoginPage /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={logged ? <RequestsListPage /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default CustomRoutes;
