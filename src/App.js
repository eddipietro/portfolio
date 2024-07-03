import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <h1>Mi Portfolio</h1>
            </header>
            <main>
                <section id="home">
                    <div className="home-content">
                        <div className="text-1">Hello, I am</div>
                        <div className="text-2">Stefania Deliso</div>
                        <div className="text-3">And I'm a <span className="typing"></span></div>
                        <a href="#about">About Me</a>
                    </div>
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <ProjectList />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Mi Nombre</p>
            </footer>
        </div>
    );
}

export default App;
