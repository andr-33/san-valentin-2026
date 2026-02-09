import React from 'react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    const isWinner = score >= 7;

    return (
        <div className="card">
            <h1 style={{ fontSize: '2.5rem' }}>{isWinner ? "¡Felicidades!" : "¡Casi lo logras!"}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Puntuación: {score} / {totalQuestions}
            </p>

            {isWinner ? (
                <div style={{ margin: '2rem 0' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Has demostrado tu conocimiento sobre el amor. ❤️
                    </p>
                    <div style={{
                        padding: '2rem',
                        border: '2px dashed var(--color-primary)',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-neutral-light)'
                    }}>
                        <h2 style={{ color: 'var(--color-secondary)' }}>¿Quieres ser mi San Valentín?</h2>
                    </div>
                </div>
            ) : (
                <div style={{ margin: '2rem 0' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Necesitas al menos 7 aciertos para la sorpresa final. ¡Inténtalo de nuevo!
                    </p>
                </div>
            )}

            <button onClick={onRestart}>Reiniciar Trivia</button>
        </div>
    );
};

export default ResultScreen;
