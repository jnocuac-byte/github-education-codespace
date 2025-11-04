import React from "react";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-entry">
        <h3>Ingeniero en Sistemas y Computacion</h3>
        <p>Universidad Central, 2023 - 2027</p>
        <ul>
          <li>Graduado con Honores</li>
          <li>Cursos Relevantes: Estructuras de Datos, Algoritmos, Desarrollo Web</li>
        </ul>
      </div>
      <div className="education-entry">
        <h3>Maestría en Ingeniería de Software</h3>
        <p>Instituto de Estudios Avanzados, 2028 - 2030</p>
        <ul>
          <li>Tesis: Optimización del Rendimiento de Aplicaciones Web</li>
          <li>GPA: 3.9/4.0</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;