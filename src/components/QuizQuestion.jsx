
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const QuizQuestion = ({ question, options, current, total, onAnswer, lastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4 font-inter">
      <div className="w-full max-w-2xl p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 transition-all duration-300 transform hover:scale-105">
        <ProgressBar current={current} total={total} />
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white text-center mb-8 mt-6">
          {question}
        </h2>
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`w-full p-4 rounded-xl font-medium text-lg transition duration-300 shadow-md border border-white/20 backdrop-blur-lg ${
                selectedOption === option
                  ? "bg-purple-600 text-white"
                  : "bg-white/20 hover:bg-white/30 text-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className={`mt-6 w-full p-4 text-white font-semibold rounded-xl shadow-lg transition duration-300 disabled:opacity-50
            ${lastQuestion 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-purple-600 hover:bg-purple-700"
            }`}
        >
          {lastQuestion ? "Submit Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;