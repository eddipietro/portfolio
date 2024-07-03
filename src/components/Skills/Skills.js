import React from 'react';
import './Skills.css';

const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 75 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'GitHub', percentage: 90 },
    { name: 'SQL', percentage: 45 },
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'SASS', percentage: 70 },
    { name: 'Firebase', percentage: 80 },
    
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
