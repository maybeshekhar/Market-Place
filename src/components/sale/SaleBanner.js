import React from "react";
import "./salebanner.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/index";

const SaleBanner = () => {
  const {dispatch}=useFilter()
  const navigate=useNavigate()
  return (
    <div class="sale">
      <div class="sale-title">
        <h2> SALE</h2>
      </div>
      <div class="sale-block-note">The most awaiting sale is here to elevate your wardrobe.</div>
      <div class="sale-image-grid">
        <img
          src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Sale-Banner-1"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1576748872293-f4972ceda096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Sale-Banner-2"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80s"
          alt="Sale-Banner-3"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
      </div>
    </div>
  );
};

export { SaleBanner };