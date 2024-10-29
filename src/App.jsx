// src/App.jsx
import React from 'react';
import './style.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Currículum Avril</h1>
        <nav>
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section id="about">
        <h2>Sobre mí</h2>
        <p>
          Hola, soy <strong>Avril Durán</strong>, tengo 18 años y conocimientos básicos en programación. 
          Además, tengo mucha experiencia en atención al público, donde he aprendido la importancia 
          de la organización, la comunicación y el trabajo en equipo. Disfruto dibujar y siempre estoy 
          dispuesta a tomar las riendas en situaciones problemáticas, ayudando a encontrar soluciones efectivas.
        </p>
      </section>

      <section id="experience">
        <h2>Experiencia</h2>
        <p>
          A lo largo de mi experiencia en atención al público, desarrollé habilidades en la gestión de conflictos, 
          la resolución rápida de problemas y la comunicación efectiva. Mi capacidad de organización me permite 
          planificar y ejecutar tareas eficientemente, asegurando siempre la satisfacción del cliente y 
          el cumplimiento de los objetivos.
        </p>
      </section>

      <section id="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Programación básica (HTML, CSS, JavaScript)</li>
          <li>Atención al público</li>
          <li>Organización y planificación</li>
          <li>Dibujo y creatividad</li>
          <li>Resolución de problemas</li>
          <li>Trabajo en equipo</li>
        </ul>
      </section>

      <footer id="contact">
        <h2>Contacto</h2>
        <p>Email: avrildurann@gmail.com</p>
        <p>&copy; 2024 Avril Durán</p>
      </footer>
    </div>
  );
}

export default App;
