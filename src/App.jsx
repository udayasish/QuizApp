import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuizStart from "./components/QuizStart";
import QuizQuestion from "./components/QuizQuestion";
import QuizSummary from "./components/QuizSummary";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [lastQuestion, setLastQuestion] = useState(false);

  useEffect(() => {
    // If we're on the quiz page but the quiz hasn't been started properly,
    // redirect to home page
    if (
      window.location.pathname === "/quiz" &&
      (!isQuizStarted || quizData.length === 0)
    ) {
      navigate("/");
    }
  }, [navigate, isQuizStarted, quizData.length]);

  const handleStart = (data) => {
    if (data && data.length > 0) {
      setQuizData(data);
      setIsQuizStarted(true);
      setLastQuestion(data.length === 1);
      navigate("/quiz");
    } else {
      alert("No quiz data available! Please try again.");
    }
  };

  const handleAnswer = (selected) => {
    const isCorrect =
      selected ===
      quizData[currentQuestion].options.find((opt) => opt.is_correct)
        ?.description;
    setScore((prev) => (isCorrect ? prev + 1 : prev));
    setAnswers([...answers, { selected, isCorrect }]);
    setLastQuestion(currentQuestion + 2 === quizData.length);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <QuizStart
            onStart={handleStart}
            setIsQuizStarted={setIsQuizStarted}
            setLoading={setLoading}
            loading={loading}
          />
        }
      />
      <Route
        path="/quiz"
        element={
          isQuizStarted && quizData.length > 0 ? (
            currentQuestion < quizData.length ? (
              <QuizQuestion
                question={quizData[currentQuestion]?.description}
                options={quizData[currentQuestion]?.options?.map(
                  (opt) => opt.description
                )}
                current={currentQuestion + 1}
                total={quizData.length}
                onAnswer={handleAnswer}
                lastQuestion={lastQuestion}
              />
            ) : (
              <QuizSummary
                score={score}
                total={quizData.length}
                answers={answers}
                quizData={quizData}
              />
            )
          ) : (
            <p className="text-center text-lg text-gray-600">
              Please start the quiz first.
            </p>
          )
        }
      />
    </Routes>
  );
};

export default App;
