import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context API/AuthProvider';

const Details = () => {
   
  const { id } = useParams(); 
  const { items} = useContext(AuthContext); 
  const [itemDetails, setItemDetails] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  

  
  useEffect(() => {
    const item = items.find(item => item.id === parseInt(id)); 
    setItemDetails(item); 
  }, [id, items]);

  // Function to handle "Talk with Expert" click
  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours(); 

   
    if (hours >= 10 && hours < 20) {
      
      window.open('https://meet.google.com/', '_blank');
    } else {
      
      setShowModal(true);
    }
  };

  if (!itemDetails) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center py-10">
      {/* Title & Image */}
      <div className="text-center w-full px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 tracking-wide">{itemDetails.title}</h1>
        <img
          src={itemDetails.image}
          alt={itemDetails.title}
          className="rounded-xl mt-4 max-h-[400px] object-cover mx-auto shadow-lg transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-4xl mt-6 space-y-8 px-6">
        {/* Short Description */}
        <div className="card bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Short Description</h2>
          <p className="text-lg text-gray-700">{itemDetails.shortDescription}</p>
        </div>

        {/* Adventure Details */}
        <div className="card bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Adventure Details</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong className="text-blue-600">Cost:</strong> BDT {itemDetails.cost}</p>
            <p><strong className="text-blue-600">Location:</strong> {itemDetails.location}</p>
            <p><strong className="text-blue-600">Duration:</strong> {itemDetails.duration}</p>
            <p><strong className="text-blue-600">Adventure Level:</strong> {itemDetails.adventureLevel}</p>
            <p><strong className="text-blue-600">Booking Availability:</strong> {itemDetails.bookingAvailability ? "Available" : "Not Available"}</p>
            <p><strong className="text-blue-600">Max Group Size:</strong> {itemDetails.maxGroupSize}</p>
          </div>
        </div>

        {/* Included Items */}
        <div className="card bg-gradient-to-r from-green-50 via-green-100 to-green-200 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Included Items</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {itemDetails.includedItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Eco-Friendly Features */}
        <div className="card bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Eco-Friendly Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {itemDetails.ecoFriendlyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Special Instructions */}
        <div className="card bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Special Instructions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {itemDetails.specialInstructions.map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Talk with Expert Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleTalkWithExpert}
          className="btn btn-primary text-white py-3 px-8 rounded-2xl text-lg shadow-xl transition-all duration-300 transform hover:bg-blue-700 hover:scale-110"
        >
          Talk with Expert
        </button>
      </div>

      {/* Modal for Consultation Time */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm">
            <h2 className="text-2xl font-semibold text-blue-700">Consultation Time</h2>
            <p className="text-lg text-gray-700 mt-4">
              Our experts are available for consultations between 10:00 AM - 8:00 PM. Please come back during this time.
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-secondary text-white py-2 px-6 rounded-2xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
