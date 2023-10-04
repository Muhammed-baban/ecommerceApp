import React from 'react';
import './index.css';

interface HyperlinkProps {
  to: string; 
  children: React.ReactNode;
  variant?: 'black' | 'white';
}

const Hyperlink: React.FC<HyperlinkProps> = ({ to, children, variant = 'white' }) => {

  return (
    <a href={to} className={`styled-hyperlink ${variant}`}>
      {children}
    </a>
  );
};

export default Hyperlink;
