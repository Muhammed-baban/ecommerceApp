import "./index.css";

interface BadgeProps {
oldPrice?:number;
price?:number;
stock:number;
}

const Badge: React.FC<BadgeProps> = ({
    oldPrice,
    price,
    stock,
  }: BadgeProps) => {
    let discountPercentage: number | undefined;
    let stockMessage: boolean;
  
    if (oldPrice !== undefined && price !== undefined) {
      if (oldPrice > price) {
        discountPercentage = Math.floor(((oldPrice - price) / oldPrice) * 100);
      }
    }
  
    if (stock === 0) {
      stockMessage = true;
    } else if (stock < 0) {
      stockMessage = true;
    } else {
      stockMessage = false;
    }
  
    return (
      <div className="styled-badge">
        {oldPrice && <span className="styled-badge-sale">
          {`${discountPercentage}%`}
        </span>}
        {stockMessage && <span className="styled-badge-stock">STOCK OUT</span>}
      </div>
    );
  };
export default Badge;
