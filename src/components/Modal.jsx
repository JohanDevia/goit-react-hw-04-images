import React, { useEffect } from 'react';
import '../styles.css';

const Modal = ({ isOpen, imageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27 && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal" onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
