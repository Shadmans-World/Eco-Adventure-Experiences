import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Card = ({ item }) => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div
      className="card bg-base-100 md:h-[550px] w-64 lg:w-80 shadow-xl  flex flex-col my-4  " 
      data-aos="fade-up" 
      data-aos-delay="200" 
    >
      {/* Image Section */}
      <figure className=" px-5 h-[200px] lg:px-10 pt-10">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl h-full w-[400px] object-cover" 
        />
      </figure>

      {/* Card Body Section */}
      <div className="card-body flex flex-col items-center text-center flex-grow p-5">
        <div className="flex flex-grow mb-4">
          <h2 className="card-title text-xl font-semibold">{item.title}</h2>
        </div>

        <h2 className="font-bold mt-2">Features</h2>
        <div className="flex flex-wrap gap-2 text-sm flex-grow mb-4">
          {item.ecoFriendlyFeatures.map((feature, idx) => (
            <p key={idx} className="text-gray-600">{feature}</p>
          ))}
        </div>

        <div className="card-actions mt-auto">
          
          <Link to={`/details/${item.id}`} className="btn btn-primary mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
