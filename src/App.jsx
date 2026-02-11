import { useState } from 'react'
import questionsData from './data/questions.json'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'
import ResultScreen from './components/ResultScreen'

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'finished'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questionsData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
    }

    // Brief delay or immediate transition?
    // For simplicity, immediate transition for now, or we could add a feedback state.
    // Let's do immediate to keep it snappy, or maybe a small visual feedback component later.

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questionsData.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setGameState('finished');
    }
  };

  const restartGame = () => {
    setGameState('start');
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="w-screen p-4 md:p-8 text-center flex flex-col justify-center items-center min-h-screen">
      {gameState === 'start' && <StartScreen onStart={startGame} />}

      {gameState === 'playing' && (
        <Quiz
          question={questionsData[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questionsData.length}
          onAnswer={handleAnswer}
        />
      )}

      {gameState === 'finished' && (
        <ResultScreen
          score={score}
          totalQuestions={questionsData.length}
          onRestart={restartGame}
        />
      )}
    </div>
  )
}

export default App
