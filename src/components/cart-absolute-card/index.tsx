import "./index.css";
import Icon from "../icon";
import CartAbsoluteSvg from "../../assest/icon/cart-absolute.svg";

interface CartAbsoluteProps  {
    items?:number;
    price?:number;
}


const CartAbsolute: React.FC<CartAbsoluteProps> = ({
    items = 2,
    price = 250,
  }) => {
    return (
    <button className="styled-cart-absolute-button">
    <div>
        <Icon icon={CartAbsoluteSvg} size={20}/>
    </div>
    <span className="styled-cart-absolute-items">{items} Items</span>
    <span className="styled-cart-absolute-price">{price} ₺</span>
    <span></span>
    </button>
  );
};

export default CartAbsolute;
