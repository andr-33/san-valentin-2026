import React from 'react';

const Quiz = ({ question, currentQuestionIndex, totalQuestions, onAnswer }) => {
    return (
        <div className="card">
            <div style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--color-secondary)' }}>{question.question}</h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(option)}
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--color-text)',
                            border: '2px solid var(--color-primary)',
                            boxShadow: 'none'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'var(--color-primary)';
                            e.target.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = 'var(--color-text)';
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
