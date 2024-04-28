import React from 'react';
import '../styles.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

export default Button;
