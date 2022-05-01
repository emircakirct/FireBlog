import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {useLocation} from 'react-router-dom'

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  let location = useLocation()
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;