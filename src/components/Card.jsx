import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl flex flex-col">
      {/* Image Section */}
      <figure className="px-10 pt-10">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl h-[200px] w-[400px] object-cover" // Ensures image maintains aspect ratio
        />
      </figure>

      {/* Card Body Section */}
      <div className="card-body flex flex-col items-center text-center flex-grow"> {/* Added flex-grow */}
        <div className='flex flex-grow'>
        <h2 className="card-title">{item.title}</h2>
        </div>
        
        <h2 className="font-bold mt-2">Features</h2>
        <div className="flex flex-wrap gap-2 text-[12px]">
          {item.ecoFriendlyFeatures.map((feature, idx) => (
            <p key={idx}>{feature}</p>
          ))}
        </div>

        <div className="card-actions mt-2"> {/* Added mt-auto to push the button to the bottom */}
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
