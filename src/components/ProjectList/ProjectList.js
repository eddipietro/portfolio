import React from 'react';
import Project from '../Project/Project';
import './ProjectList.css';

const projects = [
    {
        title: 'Cayetana ',
        imageUrl: 'https://i.postimg.cc/j5HXGtN2/android-chrome-512x512.png',
        description: 'Ecommerce de Bazar',
        link: 'https://cayetana-bazar-deco.netlify.app/'
    },
    {
        title: 'flynow',
        imageUrl: 'https://i.postimg.cc/yNMTKj1H/logoflynow.png',
        description: 'Web sobre turismo en Argentina',
        link: 'https://eddipietro.github.io/js/'
    },
    {
        title: 'Fotografia KR',
        imageUrl: 'https://i.postimg.cc/66YGLckp/logo.jpg',
        description: 'Landing Page sobre Fotografía',
        link: 'https://eddipietro.github.io/karenRomeroPH/#'
    },
    {
        title: 'Juego del Ahorcado',
        imageUrl: 'https://i.postimg.cc/MG95rmvs/6.jpg',
        description: 'Juego del Ahorcado',
        link: 'https://eddipietro.github.io/ahorcado/'
    }
];

const ProjectList = () => {
    return (
        <section className="projects" id="proyectos">
            <div className="max-width">
                <h2 className="title">Proyectos</h2>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
