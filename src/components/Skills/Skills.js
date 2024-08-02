import React from 'react';
import './Skills.css'; // Importa el archivo de estilos CSS

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Mis Habilidades</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>60%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>50%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div className="line ts"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Librerías</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Bootstrap</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
          </div>
          
          <div className="column right">
    
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span>65%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>GitHub</span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>SQL</span>
                <span>45%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Sass</span>
                <span>60%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Firebase</span>
                <span>80%</span>
              </div>
              <div className="line ts"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Figma</span>
                <span>70%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Photoshop</span>
                <span>50%</span>
              </div>
              <div className="line html"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
