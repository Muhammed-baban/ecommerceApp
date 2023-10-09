import React, { useState } from "react";
import "./index.css";
import CounterButton from "../counter-button";

interface CartSidebarProps {}

const CartSidebar: React.FC<CartSidebarProps> = () => {
  const [count, setCount] = useState(0);
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
                <div>
                  <div className="styled-cart-sidebar-cart-product-description-element">
                    <a className="styled-cart-sidebar-cart-product-description-link">
                      Hospital Reception Table
                    </a>
                  </div>
                  <div className="">
                    1&nbsp;x&nbsp;        
                    <span className="styled-cart-sidebar-cart-product-description-price">
                       349.0 ₺
                    </span>
                  </div>
                  <div className="styled-cart-sidebar-cart-product-description-counter">
                    <CounterButton
                      count={count}
                      setCount={setCount}
                      variant="grey"
                    ></CounterButton>
                  </div>
                </div>                  <button className="styled-cart-sidebar-cart-product-description-close">x</button>

              </div>
            </div>
          </div>
          <div className="styled-cart-sidebar-button">
            <a className="styled-cart-sidebar-button-title" href="/">
              View Cart
              <span className="styled-cart-sidebar-price">349.00 ₺</span>
            </a>
          </div>
        </div>
      </div>

      <div className="styled-cart-sidebar-none"></div>
    </div>
  );
};

export default CartSidebar;
