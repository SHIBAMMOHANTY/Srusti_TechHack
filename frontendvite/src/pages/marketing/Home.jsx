import React from 'react';
import hero from '../../assets/hero.png';

const Home = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-b from-blue-200 to-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Revolutionizing Rural Healthcare
        </h1>
        <p className="text-md md:text-lg text-gray-700 mb-1">
          Create surveys, collect data, and improve healthcare outcomes.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Powered by <span className="font-semibold text-blue-600">ML</span> and <span className="font-semibold text-blue-600">AI</span> for smarter insights.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
          Create Survey
        </button>
      </div>

      {/* Illustration Section */}
      <div className="mt-8 w-full flex justify-center">
        <img
          src={hero}
          alt="Healthcare Dashboard"
          className="w-full max-w-4xl rounded-lg shadow-lg lg:w-[800px] h-[400px]"
        />
      </div>

      {/* Cart-Like Features Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
          Platform Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Custom Surveys</h3>
            <p className="text-gray-700 text-center">
              Easily design and launch surveys tailored to rural healthcare needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl  cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Connected Surveys</h3>
            <p className="text-gray-700 text-center">
              Seamlessly integrate with existing surveys for enhanced insights powered by ML and AI.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl  cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Data Analytics</h3>
            <p className="text-gray-700 text-center">
              Leverage advanced tools to analyze data and uncover actionable insights.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl  cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Actionable Reports</h3>
            <p className="text-gray-700 text-center">
              Generate detailed reports to aid in effective decision-making.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl  cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Ease of Use</h3>
            <p className="text-gray-700 text-center">
              An intuitive platform that simplifies survey management.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-xl  cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Secure Integration</h3>
            <p className="text-gray-700 text-center">
              Reliable security ensures data privacy and integrity for healthcare data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
