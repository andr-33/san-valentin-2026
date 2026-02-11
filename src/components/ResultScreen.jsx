import React from 'react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    const isWinner = score >= 7;

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-[300px] md:w-[500px] border-2 border-primary text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{isWinner ? "¡Felicidades!" : "¡Casi lo logras!"}</h1>
            <p className="text-xl md:text-2xl mb-4">
                Puntuación: {score} / {totalQuestions}
            </p>

            {isWinner ? (
                <div className="my-8">
                    <p className="text-xl mb-4">
                        Muy bien, si nos conoces un poquito ❤️
                    </p>
                    <h2 className="text-2xl font-bold text-secondary">¿Quieres ser mi San Valentín?</h2>
                </div>
            ) : (
                <div className="my-8">
                    <p className="text-xl mb-4">
                        Necesitas al menos 7 aciertos para la sorpresa final. ¡Inténtalo de nuevo!
                    </p>
                </div>
            )}

            <button
                onClick={onRestart}
                className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-secondary hover:-translate-y-0.5 transition-all text-xl"
            >
                Reiniciar
            </button>
        </div>
    );
};

export default ResultScreen;
