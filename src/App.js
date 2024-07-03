import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mi Portfolio</h1>
            </header>
            <main>
                <About />
                <Skills />
                <ProjectList />
                <Contact />
            </main>
            <footer>
                <p>&copy; 2024 Mi Nombre</p>
            </footer>
        </div>
    );
}

export default App;
