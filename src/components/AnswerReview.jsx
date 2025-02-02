
import React from 'react';

const AnswerReview = ({ answers, quizData }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-white mb-6">
      Mistakes ({answers.filter(a => !a.isCorrect).length}/{answers.length})
    </h3>
    {answers.map((answer, idx) => (
      !answer.isCorrect && (
        <div
          key={idx}
          className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
        >
          <h4 className="text-xl font-semibold text-white mb-2">{quizData[idx].description}</h4>
          <p className="text-red-400">Your Answer: {answer.selected}</p>
          <p className="text-green-400">Correct Answer: {quizData[idx].options.find(opt => opt.is_correct).description}</p>
          <p className="text-gray-400 mt-2">Explanation: {quizData[idx].detailed_solution}</p>
        </div>
      )
    ))}
  </div>
);

export default AnswerReview;