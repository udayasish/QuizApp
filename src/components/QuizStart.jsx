
import React, { useState } from "react";
import { fetchQuizData } from "../services/api";

const QuizStart = ({ onStart, setLoading, loading }) => {
  const handleStart = async () => {
    setLoading(true); // Show loading state
    try {
      const data = await fetchQuizData();
      if (data && data.length > 0) {
        onStart(data);
      } else {
        alert("No quiz data available! Please try again.");
      }
    } catch (error) {
      console.error("Error loading quiz data:", error);
      alert("Failed to load quiz. Try again.");
    } finally {
      setLoading(false); // Hide loading state after data fetch
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-5xl font-bold text-white mb-8 font-playfair text-center">
        Welcome to the Quiz!
      </h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl px-4">
        Test your knowledge with our interactive quiz. Click the button below to
        get started.
      </p>
      <button
        onClick={handleStart}
        disabled={loading}
        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 flex items-center"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-6 w-6 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 00-8 8h4l-4 4 4 4z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          "Start Quiz"
        )}
      </button>
    </div>
  );
};

export default QuizStart;