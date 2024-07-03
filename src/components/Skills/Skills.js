import React from 'react';
import './Skills.css';

const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 75 },
    { name: 'Node.js', percentage: 70 },
    { name: 'MongoDB', percentage: 65 },
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'GitHub', percentage: 90 },
    { name: 'SQL', percentage: 45 },
    { name: 'SASS', percentage: 70 },
    { name: 'Firebase', percentage: 80 },
    { name: 'Librerías', percentage: 80 },
    { name: 'Bootstrap', percentage: 80 },
    { name: 'Visual Studio Code', percentage: 90 },
    { name: 'Figma', percentage: 70 },
    { name: 'Photoshop', percentage: 50 },

];

const Skills = () => {
    return (
        <section className="skills">
            <h2>Habilidades</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <p>{skill.name}</p>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: `${skill.percentage}%` }}>
                                <span>{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
