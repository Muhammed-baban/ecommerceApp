import React from "react";
import "./index.css";
import IconButton from "../icon-button";
import Favorites from "../../assest/icon/favotites.svg";
import QuickView from "../../assest/icon/quickview.svg";
import Compare from "../../assest/icon/Compare.svg";
import Cart from "../../assest/icon/cart.svg";
import Badge from "../badge";
import Button from "../button";

interface ProductCardProps {
  product: {
    id: number;
    product_name: string;
    color: string;
    size: string;
    material: string;
    price: number;
    old_price?: number;
    stock: number;
    description: string;
    reviews: {
      user: string;
      rating: number;
      comment: string;
    }[];
    image: {
      img: string;
    }[];
    cover_image: {
      img: string;
    };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="styled-product">
      <Badge
        oldPrice={product.old_price}
        price={product.price}
        stock={product.stock}
      />
      <a className="styled-product-card" href={`${product.id}`}>
        <img
          className="styled-product-card-image"
          src={product.cover_image.img}
          alt=""
        />

        <div className="styled-product-card-icon">
          <div className="styled-product-card-icon-favorites">
            <IconButton icon={Favorites} size={25} variant="orange" />
          </div>

          <IconButton icon={QuickView} size={25} variant="orange" />
          <IconButton icon={Compare} size={25} variant="orange" />
        </div>
        <div className="styled-product-card-button">
          <Button
            label="Add to Cart"
            onClick={() => ({})}
            variant="white"
            icon={Cart}
            iconSize={14}
            width={80}
          />
        </div>
      </a>
      <div className="styled-product-card-element">
        <a className="styled-product-card-title" href={`${product.id}`}>
          {product.product_name}
        </a>
        <div className="styled-product-card-price">
          {product.old_price && (
            <span className="styled-product-price-old">
              {product.old_price}.0 ₺
            </span>
          )}
          <span className="styled-product-price-new">{product.price}.0 ₺</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
