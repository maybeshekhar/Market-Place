import React  from "react";
import { Link } from "react-router-dom";

import "./categories.css";
import { useFilter } from "../../context/index";
import { FILTER_BY_SECTION } from "../../utils/index";

const Categories = () => {
  const { dispatch } = useFilter()
  return (
    <div className="categories">
      <div className="categories-container">
        <h2>CATEGORIES</h2>
      </div>
      <p class="categories-block-note">
        We find the best suppliers and makers of fashion and fancy products.
      </p>
      <div className="container">
        <div className="big-box">
          <img
            src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/june/230607-fl-shop-by-category-clothing.jpg"
            alt="Mens Category"
          />
          <div className="category-overlay">
            <h3>Clothing</h3>
            <Link
              to="/products"
              onClick={() =>
                dispatch({ type: FILTER_BY_SECTION, payload: "Womens" })
              }
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="small-box-grid">
          <div className="small-box">
            <img
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/june/230607-fl-shop-by-category-womens.jpg"
              alt="Womens Category"
            />

            <div className="category-overlay">
              <h3>Sneakers</h3>
              <Link
                to="/products"
                onClick={() =>
                  dispatch({ type: FILTER_BY_SECTION, payload: "Mens" })
                }
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="small-box">
            <img
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/june/230607-fl-shop-by-category-accessories.jpg"
              alt="Kids Category"
            />
            <div className="category-overlay">
              <h3>Accesories</h3>
              <Link
                to="/products"
                onClick={() =>
                  dispatch({ type: FILTER_BY_SECTION, payload: "Kids" })
                }
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Categories };