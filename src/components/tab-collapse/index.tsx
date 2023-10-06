import React from 'react';
import './index.css';

interface TabCollapseProps {
  data: { label: string;}[];
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}

const TabCollapse: React.FC<TabCollapseProps> = ({
  data,
  active,
  setActive,
}) => {
  return (
    <ul className="styled-tabCollapse">
      {data.map((item, index) => (
        <li className="styled-tabCollapse-item" key={index}>
          <span
            className={`styled-tabCollapse-span ${
              index === active ? 'active' : ''
            }`}
            onClick={() => setActive(index === active ? null : index)}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TabCollapse;