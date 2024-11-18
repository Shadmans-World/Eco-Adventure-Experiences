import React, { useContext } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import AwesomeSlider styles
import { AuthContext } from '../Context API/AuthProvider'; // Make sure to import AuthContext
import './Banner.css'
const Banner = () => {
  const { images } = useContext(AuthContext); // Access images from context

  return (
    <div className="banner-container flex justify-center  h-screen">
      <AwesomeSlider
        className="slider-custom"  // Use a custom class for the slider
      >
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} data-src={image} />  // Use the image URL from the context
          ))
        ) : (
          <p>Loading images...</p>  // Show loading message if images are not available yet
        )}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
