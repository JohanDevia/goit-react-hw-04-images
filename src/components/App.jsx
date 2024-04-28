import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import '../styles.css';

const API_KEY = '43493181-9b2108d6db14ffa744e2b465d';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1); // Reset page to 1 when a new query is submitted
    setImages([]); // Clear images array when a new query is submitted
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Increment page number when "Load more" button is clicked
  };

  const openModal = imageUrl => {
    setModalImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const newImages = response.data.hits;
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]); // Trigger useEffect when query or page changes

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      <Modal
        isOpen={modalOpen}
        imageUrl={modalImageUrl}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
