


import React from 'react';
import CircularProgress from './CircularProgress';
import AnswerReview from './AnswerReview';

const QuizSummary = ({ score, total, answers, quizData }) => {
  const accuracy = ((score / total) * 100).toFixed(1);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl text-white">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">Quiz Result</h1>
      <div className="flex justify-center mb-8">
        <CircularProgress percentage={accuracy} label="Accuracy" />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
          <p className="text-3xl font-bold text-green-400">{score}</p>
          <p className="text-gray-400">Correct</p>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
          <p className="text-3xl font-bold text-red-400">{total - score}</p>
          <p className="text-gray-400">Incorrect</p>
        </div>
      </div>
      <AnswerReview answers={answers} quizData={quizData} />
    </div>
  );
};

export default QuizSummary;




