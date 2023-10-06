import React from "react";
import "./index.css";

interface CartSidebarProps {}

const CartSidebar: React.FC<CartSidebarProps> = ({}) => {
  return (
    <div className="styled-cartsidebar">
      <div className="styled-cart-sidebar">
        <div className="styled-cart-sidebar-element">
          <div className="styled-cart-sidebar-element-tabs">
            <h3 className="styled-cart-sidebar-element-tabs-title">Cart</h3>
            <button className="styled-cart-sidebar-element-tabs-button">
              x
            </button>
          </div>
        </div>
      </div>

      <div className="styled-cart-sidebar-cart">
        <div className="styled-cart-sidebar-cart-product">
          <a href="/" className="styled-cart-sidebar-cart-product-link">
            <div className="styled-cart-sidebar-cart-product-image">
              <div className="styled-cart-sidebar-cart-product-image-element">
                <img
                className="styled-cart-sidebar-cart-product-image-img"
                  src="https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F1.jpg%3Fv%3D1631612421/1080/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F1.jpg%3Fv%3D1631612421&w=1080&q=75"
                  alt=""
                ></img>
              </div>
            </div>
          </a>
          <div className="styled-cart-sidebar-cart-product-description">

          </div>
        </div>
      </div>

      <div className="styled-cart-sidebar-none"></div>
    </div>
  );
};

export default CartSidebar;
