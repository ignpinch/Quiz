import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MARIS from '../assets/MARIS.png';  // Import the image
import antukin from '../assets/antukin.mp3';  // Import the audio file

function Homepage() {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleStartQuiz = () => {
    navigate('/quiz');  // Navigate to the Quiz page
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center overflow-hidden"> {/* Prevent overflow */}
      <div
        className="m-5 text-center p-6 bg-white rounded-lg w-full max-w-md"
      >
        {/* Audio Player */}
        <audio autoPlay loop>
          <source src={antukin} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <h1 className="text-4xl font-bold text-black">QUIZ TIME!!</h1>

        {/* Image Section */}
        <img
          src={MARIS}
          alt="Maris"
          className="rounded-lg w-full h-auto my-5"
        />

        {/* Main Content */}
        <main>
          <button
            onClick={handleStartQuiz}  // Add click handler
            className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            Start Quiz
          </button>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
