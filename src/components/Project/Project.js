import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    return (
        <div className="project">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
    );
};

export default Project;
