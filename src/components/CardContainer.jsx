import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context API/AuthProvider';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const CardContainer = () => {
  const { items } = useContext(AuthContext);

  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className="max-w-[1440px] px-3 md:px-0 mx-auto flex justify-center flex-col items-center mt-10">
      {/* Title of the project */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-8 text-center">BEAUTIFUL BANGLADESH</h1>
      
      {/* Description of the project */}
      <p className="text-lg text-center text-gray-400 mt-4 max-w-4xl">
        Discover the breathtaking beauty of Bangladesh through our carefully curated eco-friendly tourist packages. 
        Explore vibrant landscapes, lush green hills, rivers, and cultural treasures while supporting sustainable travel practices. 
        Whether you're a nature lover, adventure seeker, or history enthusiast, these packages offer a unique opportunity to experience the wonders of Bangladesh in an environmentally conscious way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {items.map(item => (
          <div
            key={item.id}
            data-aos="fade-up" // Apply fade-up animation to each card
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
