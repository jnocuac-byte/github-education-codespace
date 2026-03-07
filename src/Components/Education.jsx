import React from "react";

import image from "../images/creativeWorkplace.jpg";
const imageAltText = "abstract background with books and graduation cap";

/*Crear componente Education con imagen de fondo las variables en lista para los 
titulos, fechas y descripciones, lugar de estudio y retorna el componente html con style
y que use estas variables, lo único estático sera un h2 que diga education
de resto se usa en variables, y todo en ingles sobre lo siguiente:

Ingeniero en Sistemas y Computacion
Universidad Central, 2023 - 2027

Graduado con Honores
Cursos Relevantes: Estructuras de Datos, Algoritmos, Desarrollo Web
Maestría en Ingeniería de Software
Instituto de Estudios Avanzados, 2028 - 2030

Tesis: Optimización del Rendimiento de Aplicaciones Web
GPA: 3.9/4.0
*/

const educationList = [
  {
    title: "Bachelor of Science in Systems and Computation Engineering",
    institution: "Central University",
    dates: "2023 - 2027",
    description: "Graduated with Honors. Relevant Courses: Data Structures, Algorithms, Web Development.",
  },
  {
    title: "Master of Science in Software Engineering",
    institution: "Institute of Advanced Studies",
    dates: "2028 - 2030",
    description: "Thesis: Optimizing Web Application Performance. GPA: 3.9/4.0.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        {educationList.map((education, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <h3>{education.title}</h3>
            <p><strong>{education.institution}</strong> | {education.dates}</p>
            <p>{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;