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
        title: 'Tienda Pasta',
        imageUrl: 'https://i.postimg.cc/tJN0W7Ss/logo.jpg',
        description: 'Ecommerce tienda de Pasta',
        link: 'https://dellapasta.netlify.app/#/'
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
