import React, { useEffect } from 'react';
import { FaLeaf, FaMapMarkedAlt, FaThumbsUp } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Extended = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // AOS with a duration and animation to run once
    }, []);

    return (
        <div className="mt-12 px-4 sm:px-6 lg:px-12">
            {/* Sustainable Travel Tips Section */}
            <section className="py-16 bg-gradient-to-r from-green-100 to-green-50 rounded-lg shadow-lg mb-12 p-5" data-aos="fade-up">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-8">
                        Sustainable Travel Tips
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            data-aos="fade-up"
                        >
                            <FaLeaf className="text-4xl sm:text-5xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-700">
                                Pack Light
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Reduce your carbon footprint by packing only what you need and choosing eco-friendly gear.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            data-aos="zoom-in"
                        >
                            <FaMapMarkedAlt className="text-4xl sm:text-5xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-700">
                                Respect Local Cultures
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Be mindful of local customs and support sustainable tourism practices.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            data-aos="fade-up"
                        >
                            <FaThumbsUp className="text-4xl sm:text-5xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-700">
                                Go Digital
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Reduce paper waste by using digital tickets and maps on your eco-adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Eco-Adventure Section */}
            <section className="py-16 bg-gray-100 rounded-lg shadow-lg mb-12 p-5" data-aos="fade-up">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-8">
                        Why Choose BEAUTIFUL BANGLADESH?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-12 max-w-3xl mx-auto">
                    BEAUTIFUL BANGLADESH offer a unique way to explore the world while preserving nature for future generations. By choosing eco-friendly travel experiences, you contribute to the protection of our planet and support sustainable practices in local communities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
                        <div
                            className="w-full sm:w-1/2 lg:w-1/3 text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            data-aos="fade-up"
                        >
                            <FaLeaf className="text-5xl sm:text-6xl text-green-500 mb-6 mx-auto" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-700">
                                Sustainability
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Support conservation efforts by choosing eco-friendly tours and activities.
                            </p>
                        </div>
                        <div
                            className="w-full sm:w-1/2 lg:w-1/3 text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            data-aos="zoom-in"
                        >
                            <FaMapMarkedAlt className="text-5xl sm:text-6xl text-green-500 mb-6 mx-auto" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-700">
                                Cultural Preservation
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Engage with local cultures in a way that respects their heritage and environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extended;
