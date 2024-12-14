import React from "react";
import "./Loader.scss";
import loader from "../Assets/royalbloom2.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/Home");
    }, 2400);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div id="loader">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
