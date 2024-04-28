import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import '../styles.css';

const Loader = () => {
  return (
    <div className="Loader">
      <FidgetSpinner
        visible={true}
        height={80}
        width={80}
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default Loader;
