import React from 'react';
import '../styles.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => openModal(image.largeImageURL)}
    >
      <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
