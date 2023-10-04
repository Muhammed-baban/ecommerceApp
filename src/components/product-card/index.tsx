import React from "react";
import "./index.css";
interface ProductCardProps {
  product: {
    id: number;
    product_name: string;
    variants: {
      color: string;
      size: string;
      material: string;
      price: number;
      old_price: number;
      stock: number;
    }[];
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
    <div className="styled-product-card">
        <div  className="styled-product-card-image">
      <img src={product.cover_image.img} alt=""></img>
      </div>

      <p>{product.description}</p>
      <div className="variants">
        {product.variants.map((variant, index) => (
          <div key={index} className="variant">
            <p>Color: {variant.color}</p>
            <p>Size: {variant.size}</p>
            <p>Material: {variant.material}</p>
            <p>Price: ${variant.price}</p>
            {variant.old_price && <p>Old Price: ${variant.old_price}</p>}
            <p>Stock: {variant.stock}</p>
          </div>
        ))}
      </div>
      <div className="reviews">
        <h3>Reviews:</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>User: {review.user}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
