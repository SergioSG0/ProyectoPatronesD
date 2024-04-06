// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Autenticacion from './Autenticacion';

const Dashboard = () => {
  const { handleLogout } = Autenticacion();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Llama a la función de cierre de sesión
    handleLogout();
    // Redirige al usuario a la página de inicio de sesión
    navigate('/HomePage');
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500">
        {/* Agrega un botón para cerrar sesión */}
        <div className="container mx-auto py-4">
          <button className="text-white" onClick={handleLogoutClick}>Cerrar Sesión</button>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos Artísticos</h2>
        <p>Bienvenido a tu sitio de Co-Creación de Proyectos Artísticos Colaborativos.</p>
      </div>
    </div>
  );
};

export default Dashboard;
