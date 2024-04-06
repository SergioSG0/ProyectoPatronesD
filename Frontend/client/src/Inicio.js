import React from 'react';

const Inicio = () => {
    return (
        <div>
            <section id="hero">
                <h1>Bienvenido a la Plataforma de Co-Creación</h1>
                <p>Colabora en proyectos artísticos de manera colaborativa.</p>
            </section>
            <section id="features">
                <h2>Características Principales</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>
            <section id="projects">
                <h2>Proyectos Destacados</h2>
                {/* Aquí puedes mostrar una lista de proyectos destacados */}
            </section>
            <footer id="footer">
                {/* Aquí puedes agregar información de contacto y enlaces adicionales */}
            </footer>
        </div>
    );
};

export default Inicio;
