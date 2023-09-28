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
    let stockMessage: string;
  
    if (oldPrice !== undefined && price !== undefined) {
      if (oldPrice > price) {
        discountPercentage = Math.floor(((oldPrice - price) / oldPrice) * 100);
      }
    }
  
    if (stock === 0) {
      stockMessage = 'STOCK OUT';
    } else if (stock < 0) {
      stockMessage = 'STOCK OUT';
    } else {
      stockMessage = '';
    }
  
    return (
      <div className="styled-badge">
        <span className="styled-badge-sale">
          {`${discountPercentage}%`}
        </span>
        <span className="styled-badge-stock">{stockMessage}</span>
      </div>
    );
  };
export default Badge;
