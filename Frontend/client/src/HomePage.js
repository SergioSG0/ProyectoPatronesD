import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inicio from './Inicio';


const HomePage = () => {
    const [selectedSection, setSelectedSection] = useState('');
    const navigate = useNavigate(); // Función de navegación

    // Función para manejar el cambio de sección
    const handleSectionChange = (sectionId) => {
        setSelectedSection(sectionId);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-white mr-4">Inicio</Link>
                        <a href="#features" className="text-white hover:underline mr-4">Proyectos</a>
                        <a href="#projects" className="text-white hover:underline mr-4">Proyectos2</a>
                        <a href="#testimonials" className="text-white hover:underline mr-4">Acerca de nosotros</a>
                        <a href="#footer" className="text-white hover:underline">Contacto</a>
                    </div>
                    <div>
                        <Link to="/login" className="text-white mr-4 hover:underline">Iniciar Sesión</Link>
                        <Link to="/register" className="text-white hover:underline">Registrarse</Link>
                    </div>
                </nav>
            </header>
            
            {/* Renderizar la sección seleccionada */}
            {selectedSection === 'inicio' && <Inicio />}

        </div>
    );
};

export default HomePage;
