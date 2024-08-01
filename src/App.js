import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import './App.css';





function App() {
    return (
        <div className="App">
            <NavBar />
                    <Intro/>
                    <About />


                    <Skills />


                    <ProjectList />


                    <Contact />

            <footer>
                <p>&copy; 2024 Mi Nombre</p>
            </footer>
        </div>
    );
}

export default App;
