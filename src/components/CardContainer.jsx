import React, { useContext } from 'react';
import { AuthContext } from '../Context API/AuthProvider';
import Card from './Card';

const CardContainer = () => {
  const { items } = useContext(AuthContext);
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center flex-col items-center ">
      {/* Title of the project */}
      <h1 className='text-4xl font-bold'>ECO-Beautiful BANGLADESH</h1>
      
      {/* Description of the project */}
      <p className="text-lg text-center text-gray-400 mt-4 max-w-4xl">
        Discover the breathtaking beauty of Bangladesh through our carefully curated eco-friendly tourist packages. 
        Explore vibrant landscapes, lush green hills, rivers, and cultural treasures while supporting sustainable travel practices. 
        Whether you're a nature lover, adventure seeker, or history enthusiast, these packages offer a unique opportunity to experience the wonders of Bangladesh in an environmentally conscious way.
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          items.map(item => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default CardContainer;
