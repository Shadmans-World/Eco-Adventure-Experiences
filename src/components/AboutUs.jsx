import aboutPhoto from "../assets/about.png"
const AboutUs = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-12">
            At <span className="font-bold text-green-600">Eco Adventure</span>, we believe in
            connecting people with nature while promoting eco-friendly and sustainable
            tourism. Our goal is to provide unforgettable experiences, while leaving a
            positive impact on the environment and the local communities we visit.
          </p>
  
          <div className="mb-8">
            <img
              src={aboutPhoto}
              alt="Nature Adventure"
              className="rounded-lg shadow-lg mx-auto object-cover w-[300px] max-w-4xl"
            />
          </div>
  
          <p className="text-lg text-gray-600 mb-8">
            Join us on a journey of exploration and preservation. Together, we can make a
            difference, one adventure at a time.
          </p>
  
          <a
            href="/services"
            className="inline-block bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg transform hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            Discover Our Services
          </a>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  