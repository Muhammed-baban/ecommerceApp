import { useState } from "react";
import CounterButton from "../counter-button";
import "./index.css";
import IconButton from "../icon-button";
import EditSVG from "../../assest/icon/edit.svg";
import DeleteSVG from "../../assest/icon/delete.svg";

interface TableCartItemProps {
    image:string;
    productName:string;
    price:string;
    piece:number;
    subTotal:string;
    id:number;
}

const TableCartItem: React.FC<TableCartItemProps> = ({image,productName,price,piece,subTotal,id}) => {
  const [count, setCount] = useState(piece);
  return (
    <div className="styled-table-cart-item">
      <table className="styled-table-cart-item-table">
        <tr className="styled-table-cart-item-title">
          <th>IMAGE</th>
          <th>PRODUCT NAME</th>
          <th>UNTIL PRICE</th>
          <th>QTY</th>
          <th>SUBTOTAL</th>
          <th>ACTION</th>
        </tr>
        <tr>
          <td className="styled-table-cart-item-image">
            <a className="styled-table-cart-item-image-link" href={`${id}`}>
              <img
                className="styled-table-cart-item-image-img"
                src={image}
                alt=""
              ></img>
            </a>
          </td>
          <td className="styled-table-cart-item-name">
            <a className="styled-table-cart-item-name-link" href="/">
{productName}            </a>
          </td>
          <td className="styled-table-cart-item-price">{price}</td>
          <td className="styled-table-cart-item-qty">
            <CounterButton
              count={count}
              setCount={setCount}
              variant="grey"
            ></CounterButton>
          </td>
          <td className="styled-table-cart-item-subtotal">{subTotal}</td>
          <td>
            <div className="styled-table-cart-item-action">
            <IconButton icon={EditSVG} size={18}></IconButton>
            <IconButton icon={DeleteSVG} size={18}></IconButton></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableCartItem;
