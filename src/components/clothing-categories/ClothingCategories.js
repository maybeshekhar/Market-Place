import React from "react";
import { Link } from "react-router-dom";

import "./clothingcategories.css";
import { useFilter } from "../../context/index";
import { CLEAR_FILTERS, FILTER_BY_CATEGORY } from "../../utils/index";

const ClothingCategories = () => {
  const { dispatch } = useFilter();
  const handleCategoryClick = (category) => {
    dispatch({ type: CLEAR_FILTERS }); 
    dispatch({ type: FILTER_BY_CATEGORY, payload: category }); 
  };
  return (
    <div className="clothing-categories-container">
      <div className="categories-title">
        <h2> CLOTHING CATEGORIES</h2>
      </div>
      <div className="category-block-note">
        We find the best suppliers and makers of fashion and fancy products.
      </div>
      <div className="clothing-categories">
        <div className="category">
          <img
            src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/june/230623-fl-hoka-white-out-3up.jpg"
            alt="Activewear"
          />
          <div className="overlay">
            <div className="text">Athleisure</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Active Wear")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category ">
          <img
            src="https://images.unsplash.com/photo-1554925051-f668ed70d520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=334&q=80"
            alt="Dress"
          />
          <div className="overlay category-long">
            <div className="text">Street Style</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Office Wear")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
            alt="Office-Wear"
          />
          <div className="overlay">
            <div className="text">Semi-Formal</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Tops")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://images.unsplash.com/photo-1519733833087-3b1ceb8d56c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=429&q=80"
            alt="FreeStyle"
          />
          <div className="overlay">
            <div className="text">Unisex</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Casual")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
            alt="Formal"
          />
          <div className="overlay category-small">
            <div className="text">Best Collection</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Casual")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/june/230619-fl-homepage-court-classics-ft-new-balance-3up.jpg"
            alt="Freestyle"
          />
          <div className="overlay category-small">
            <div className="text">Sneakers</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Casual")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
            alt="Casual"
          />
          <div className="overlay category-small">
            <div className="text">Watches</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Formal")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9b%2F94%2F9b948535ee241e7f2d85d664ababba47a95d9e01.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="Tops"
          />
          <div className="overlay category-small">
            <div className="text">Jewelry</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Freestyle")}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClothingCategories };