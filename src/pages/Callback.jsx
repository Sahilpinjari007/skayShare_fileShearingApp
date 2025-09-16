import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Callback = () => {
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem('authAccessToken', searchParams.get("token") || null);
    navigate('/')
  }, []);
};

export default Callback;
