import React, { useEffect, useState } from 'react';
import './About.css';
import myAvatar from '../../assets/eriPerfil.jpg'; // Asegúrate de que la ruta de la imagen sea correcta

const phrases = ["Web Developer", "Front End Developer", "Full Stack Developer"];

const About = () => {
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
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Sobre Mi</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={myAvatar} alt="my-avatar" />
                    </div>
                    <div className="column right">
                        <div className="text">Me llamo Erika Di Pietro y soy <span className="typing">{text}</span></div>
                        <p>¡Hola! Soy Erika Di Pietro, desarrolladora web Full Stack Junior con un enfoque fuerte en Front End. Recientemente me trasladé a España desde Argentina y estoy emocionada por aplicar mis conocimientos en programación y diseño web para desarrollar experiencias digitales únicas. Estoy comprometida con mi crecimiento profesional y lista para contribuir a proyectos que impulsen la innovación.









.</p>
                        <br />
                        <p style={{ fontStyle: "italic" }}>
                                     Dato curioso: Me encanta el diseño web tanto como la tecnología, y he creado algunos sitios web para amigos y familiares como proyectos paralelos.                        </p>
                        <a href="#skills" className="btn">Mis Habilidades </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
