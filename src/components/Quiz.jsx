import React, { useState, useEffect } from 'react';

const Quiz = ({ question, currentQuestionIndex, totalQuestions, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setIsAnswered(false);
    }, [question]);

    const handleOptionClick = (option) => {
        if (isAnswered) return;

        setIsAnswered(true);
        setSelectedAnswer(option);

        setTimeout(() => {
            onAnswer(option);
        }, 800);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border-2 border-primary">
            <div className="mb-4 text-primary font-bold">
                Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </div>
            <h2 className="mb-8 text-2xl font-bold text-secondary">{question.question}</h2>
            <div className="grid gap-4 grid-cols-1">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option === question.answer;

                    let buttonClass = "py-3 px-6 rounded-lg font-semibold border-2 transition-all duration-200 ";

                    if (isAnswered) {
                        if (isSelected) {
                            if (isCorrect) {
                                buttonClass += "bg-[#40BF3B] text-white border-[#40BF3B]";
                            } else {
                                buttonClass += "bg-secondary text-white border-secondary shake";
                            }
                        } else {
                            buttonClass += "bg-white text-gray-400 border-gray-200 opacity-50 cursor-not-allowed";
                        }
                    } else {
                        buttonClass += "bg-white text-gray-800 border-primary hover:bg-primary hover:text-white shadow-none";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            disabled={isAnswered}
                            className={buttonClass}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Quiz;
