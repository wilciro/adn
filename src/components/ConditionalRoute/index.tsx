// React
import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate, RouteProps } from 'react-router';

interface ProtectedRouteProps extends RouteProps {
  canActivate?: boolean;
  redirectTo: string;
  path: string;
  component: React.ReactChild
};

export const ConditionalRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  redirectTo,
  canActivate,
  path
}) => {
  return (
    <Route
      path={path}
      element={
        canActivate ?  Component : <Navigate to={redirectTo} />
      }
    />
  );
};


ConditionalRoute.defaultProps = {
  canActivate: true
}