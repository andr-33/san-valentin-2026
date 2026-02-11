import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-[300px] md:w-[500px] border-2 border-primary">
            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 md:mb-8 drop-shadow-sm leading-tight">Trivia de San Valentín ❤️</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                ¡Bienvenida mi bichito conejito! <br /> Vamos a ver cuanto conoces de nosotros.
                Responde correctamente al menos 7 de las 10 preguntas para desbloquear una sorpresa especial.
            </p>
            <button
                onClick={onStart}
                className="bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary hover:-translate-y-0.5 transition-all text-xl cursor-pointer"
            >
                Comenzar
            </button>
        </div>
    );
};

export default StartScreen;
