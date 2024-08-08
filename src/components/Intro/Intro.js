import React, { useEffect, useState } from 'react';
import './Intro.css'; // Asegúrate de que la ruta sea correcta y el archivo CSS esté disponible


const phrases = ["Web Developer", "Front End Developer", "Full Stack Developer"];

const Intro = () => {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingSpeed] = useState(100); // Cambia la velocidad aquí

    useEffect(() => {
        const handleTyping = () => {
            const phrase = phrases[currentPhrase];
            if (isDeleting) {
                setText(prev => prev.substring(0, prev.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setCurrentPhrase((prev) => (prev + 1) % phrases.length);
                }
            } else {
                setText(phrase.substring(0, text.length + 1));
                if (text === phrase) {
                    setIsDeleting(true);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [text, isDeleting, currentPhrase, typingSpeed]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="text-1">Hola, me llamo</div>
                <div className="text-2">Erika Di Pietro</div>
                <div className="text-3">Soy <span className="typing">{text}</span></div>
                <a href="#about">Sobre Mi</a>
            </div>
        
        </section>
    );
};

export default Intro;
