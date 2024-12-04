import React, { useState } from 'react';
import antukin from '../assets/antukin.mp3'; // Import the audio file
import congratsImage from '../assets/congrats.png'; // Import the congrats image
import betterLuckImage from '../assets/betterluck.png'; // Import the better luck image

function Quiz() {
  const quizData = [
    {
      question: "But I'll touch ______ nalang",
      options: ["yours", "myself", "ourself", "yourself"],
      correctAnswer: "myself"
    },
    {
      question: "You miss my ____? 🙂",
      options: ["dog", "dad", "body", "food"],
      correctAnswer: "body"
    },
    {
      question: "But I like being ____ by you",
      options: ["hold", "wild", "held", "hide"],
      correctAnswer: "held"
    },
    {
      question: "Ugh yung amoy ng _______ mo",
      options: ["sweeter", "worker", "weaker", "sweater"],
      correctAnswer: "sweater"
    },
    {
      question: "I want baby ______",
      options: ["kisses", "cologne", "powder", "cry"],
      correctAnswer: "kisses"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [answers, setAnswers] = useState({}); // Store user answers
  const [isAnswered, setIsAnswered] = useState(false); // Track if the question has been answered
  const [showScore, setShowScore] = useState(false); // Track if the score should be displayed

  const handleAnswerChange = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: answer
    });
    setIsAnswered(true); // Mark the question as answered
  };

  // Determine the class based on whether the answer is correct or not
  const getOptionClass = (option) => {
    if (answers[currentQuestionIndex] === option) {
      return option === quizData[currentQuestionIndex].correctAnswer
        ? "border-green-500 text-green-500"
        : "border-red-500 text-red-500";
    }
    return "border-gray-300 text-gray-600";
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false); // Reset answered state for the next question
    }
  };

  const handleSubmit = () => {
    const correctAnswers = Object.keys(answers).filter(
      (key) => answers[key] === quizData[key].correctAnswer
    ).length; // Calculate the number of correct answers
    setShowScore(true); // Show the score
  };

  const handleTryAgain = () => {
    // Refresh the page to reset the quiz
    window.location.reload();
  };

  const correctAnswersCount = Object.keys(answers).filter(
    (key) => answers[key] === quizData[key].correctAnswer
  ).length; // Calculate the number of correct answers

  // Determine the image and message based on the score
  const imageSrc = correctAnswersCount === 5 || correctAnswersCount === 3 || correctAnswersCount === 4 ? congratsImage : betterLuckImage;
  const message = correctAnswersCount === 5 || correctAnswersCount === 3 || correctAnswersCount === 4 
    ? 'Congrats sa pagiging tyismosa!' 
    : 'Better luck next time sa pagiging tyismosa! ';

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        {/* Audio Player for background music */}
        <audio autoPlay loop>
          <source src={antukin} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <h1 className="text-3xl font-bold text-black mb-6 text-center">Quiz Time</h1>

        {/* Display score if the quiz is finished */}
        {showScore ? (
          <div className="text-center">
            <p className="text-xl font-bold">You scored {correctAnswersCount} out of {quizData.length}</p>
            <p className="text-lg text-center mb-5">{message}</p>
            {/* Display image and message based on score */}
            <img src={imageSrc} alt="Result" className="w-40 h-40 mx-auto mb-4" />
            

            <button
              onClick={handleTryAgain}
              className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Current Question */}
            <div className="mb-6">
              <p className="text-xl mb-4 text-center">{quizData[currentQuestionIndex].question}</p>

              {/* Choices */}
              <div className="grid grid-cols-2 gap-4">
                {quizData[currentQuestionIndex].options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`w-full py-3 border-2 rounded-lg ${getOptionClass(option)} hover:border-gray-600 transition duration-300`}
                    onClick={() => handleAnswerChange(option)}
                    disabled={isAnswered} // Disable button if already answered
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="text-center">
              {currentQuestionIndex < quizData.length - 1 && isAnswered && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300 mb-3"
                >
                  Next Question
                </button>
              )}

              {currentQuestionIndex === quizData.length - 1 && isAnswered && (
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
