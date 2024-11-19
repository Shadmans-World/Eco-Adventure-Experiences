// import React, { useContext } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css'; // Import AwesomeSlider styles
// import { AuthContext } from '../Context API/AuthProvider'; // Make sure to import AuthContext
// import './Banner.css'
// const Banner = () => {
//   const { images } = useContext(AuthContext); // Access images from context

//   return (
//     <div className="banner-container flex justify-center  mt-14">
//       <AwesomeSlider
//         className="slider-custom"  // Use a custom class for the slider
//       >
//         {images && images.length > 0 ? (
//           images.map((image, index) => (
//             <div key={index} data-src={image} />  // Use the image URL from the context
//           ))
//         ) : (
//           <p>Loading images...</p>  // Show loading message if images are not available yet
//         )}
//       </AwesomeSlider>
//     </div>
//   );
// };

// export default Banner;

import React, { useContext, useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import AwesomeSlider styles
import { AuthContext } from '../Context API/AuthProvider'; // Make sure to import AuthContext
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import './Banner.css';

const Banner = () => {
  const { images } = useContext(AuthContext); // Access images from context
  const [isLoaded, setIsLoaded] = useState(false); // State to track image loading
  const [sliderKey, setSliderKey] = useState(0); // Key to force re-render the slider

  // Initialize AOS for the animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Set a timeout to simulate loading for the slider after the component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true); // Set images to loaded after timeout
      setSliderKey(prevKey => prevKey + 1); // Trigger a re-render to force slider update
    }, 100); // You can adjust this delay based on your experience

    return () => clearTimeout(timeout); // Clean up the timeout if component unmounts
  }, []);

  return (
    <div className="banner-container flex justify-center mt-14">
      {/* Loading spinner until the images are loaded */}
      {!isLoaded && <div className="loading-spinner">Loading...</div>}

      <AwesomeSlider
        className="slider-custom"
        key={sliderKey} // Use key to force AwesomeSlider to re-render
        style={{ height: '400px', width: '100%' }} // Ensure correct height for slider
      >
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              data-src={image}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            />
          ))
        ) : (
          <p>Loading images...</p> // Placeholder while images are loading
        )}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
