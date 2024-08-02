import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    return (
        <div className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
    );
};

export default Project;
