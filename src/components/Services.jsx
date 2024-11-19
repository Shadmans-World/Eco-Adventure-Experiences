import React from 'react';
import { FaMountain, FaWater, FaTree, FaCampground, FaHiking } from 'react-icons/fa';
import { GiBoatFishing, GiTigerHead } from 'react-icons/gi';

const Services = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Adventure Services</h2>
        <p className="text-xl mb-16">Embark on thrilling eco-friendly adventures in Bangladesh with our specially curated services. Whether you're into hiking, diving, safaris, or more, we have something for everyone!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Mountain Treks */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaMountain className="text-4xl text-green-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Mountain Treks</h3>
            <p className="text-gray-700 mb-4">
              Explore Bangladesh's stunning hill ranges. From lush greenery to panoramic views, our mountain treks are designed for adventure enthusiasts of all levels.
            </p>
          </div>

          {/* Ocean Dives */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaWater className="text-4xl text-blue-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Ocean Dives</h3>
            <p className="text-gray-700 mb-4">
              Dive into crystal-clear waters and explore vibrant coral reefs. Our eco-friendly diving experiences let you explore marine life safely and sustainably.
            </p>
          </div>

          {/* Wildlife Safaris */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <GiTigerHead className="text-4xl text-orange-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Wildlife Safaris</h3>
            <p className="text-gray-700 mb-4">
              Explore the Sundarbans and get a close look at the majestic Bengal tiger. A perfect adventure for wildlife enthusiasts looking for unique experiences.
            </p>
          </div>

          {/* Mangrove Forest Expeditions */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <GiBoatFishing className="text-4xl text-teal-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Mangrove Forest Expeditions</h3>
            <p className="text-gray-700 mb-4">
              Paddle through the tranquil Ratargul swamp forest and discover Bangladesh’s unique mangrove ecosystem in a peaceful and sustainable way.
            </p>
          </div>

          {/* Camping Retreats */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaCampground className="text-4xl text-yellow-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Camping Retreats</h3>
            <p className="text-gray-700 mb-4">
              Experience the tranquility of camping under the stars in the Nilgiri Hills. Enjoy a mix of nature, adventure, and eco-friendly practices.
            </p>
          </div>

          {/* River Adventures */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaHiking className="text-4xl text-purple-500 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">River Adventures</h3>
            <p className="text-gray-700 mb-4">
              Kayak or boat ride across Bangladesh’s pristine rivers. From Kaptai Lake to Alikadam River, these adventures are designed for thrill-seekers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
