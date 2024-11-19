import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Card = ({ item }) => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation once
    });
  }, []);

  return (
    <div
      className="card bg-base-100 w-96 shadow-xl flex flex-col my-4 " // Added my-4 for spacing between cards
      data-aos="fade-up" // AOS animation on scroll
      data-aos-delay="200" // Delay before animation starts
    >
      {/* Image Section */}
      <figure className="px-10 pt-10">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl h-[200px] w-[400px] object-cover" // Ensures image maintains aspect ratio
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
          {/* Added mt-auto to push the button to the bottom */}
          <Link to={`/details/${item.id}`} className="btn btn-primary mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
