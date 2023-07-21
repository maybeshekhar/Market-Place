import { Carousel } from "../components/carousel/Carousel";
import {  Categories } from "../components/categories/Categories";
import { ClothingCategories } from "../components/clothing-categories/ClothingCategories";
import { SaleBanner } from "../components/sale/SaleBanner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SaleBanner/>
      <ClothingCategories/>
    </div>
  );
};

export { HomePage };