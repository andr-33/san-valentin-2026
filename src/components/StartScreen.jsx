import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="card">
            <h1>Trivia de San Valentín ❤️</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                ¡Bienvenido al reto del amor! Demuestra cuánto sabes sobre el Día de San Valentín.
                Responde correctamente al menos 7 de las 10 preguntas para desbloquear una sorpresa especial.
            </p>
            <button onClick={onStart}>Comenzar</button>
        </div>
    );
};

export default StartScreen;
