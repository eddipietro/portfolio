import React from 'react';
import Project from '../Project/Project';
import './ProjectList.css';

const projects = [
    {
        title: 'Proyecto 1',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Descripción del Proyecto 1',
        link: 'http://example.com/proyecto1'
    },
    {
        title: 'Proyecto 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Descripción del Proyecto 2',
        link: 'http://example.com/proyecto2'
    },
    // Agrega más proyectos según sea necesario
];

const ProjectList = () => {
    return (
        <section className="projects">
            <h2>Proyectos</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
