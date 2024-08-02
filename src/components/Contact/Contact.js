import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contáctame</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Ponerse en Contacto</div>
                        <p>¡Ponte en contacto conmigo!</p>
                        <div className="icons">
                            <div className="row">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                                <div className="info">
                                    <div className="head">Nombre</div>
                                    <div className="sub-title">Erika Di Pietro</div>
                                </div>
                            </div>
                            <div className="row">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                <div className="info">
                                    <div className="head">Ubicación</div>
                                    <div className="sub-title">Barcelona</div>
                                </div>
                            </div>
                            <div className="row">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">
                                        <a href="mailto:stefania.deliso1@gmail.com">erikadipietro7@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Nombre" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field textarea">
                                <textarea placeholder="Mensaje" required></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit" className="button">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
