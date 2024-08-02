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
        title: 'DellaPasta',
        imageUrl: 'https://via.placeholder.com/300',
        description: 'Ecommerce tienda de Pasta',
        link: 'https://dellapasta.netlify.app/#/'
    },
    {
        title: 'Proyecto 3',
        imageUrl: 'https://via.placeholder.com/300',
        description: 'Descripción del Proyecto 3',
        link: 'http://example.com/proyecto3'
    },
    {
        title: 'Proyecto 4',
        imageUrl: 'https://via.placeholder.com/300',
        description: 'Descripción del Proyecto 4',
        link: 'http://example.com/proyecto4'
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
