// App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import Autenticacion from './Autenticacion';
import './tailwindEstilos.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
  const { isAuthenticated, handleLogin } = Autenticacion(); // Obtener el estado y las funciones de autenticación

  console.log("isAuthenticated:", isAuthenticated); // Debugging: Imprimir el estado de autenticación

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar la aplicación
    const authInfo = localStorage.getItem('isAuthenticated');
    if (authInfo) {
      handleLogin(); // Establecer el estado de autenticación como verdadero si hay información de autenticación en el almacenamiento local
    }
  }, [handleLogin]);

  return (
    <Router>
      <div>

        {/* Renderiza las rutas */}
        <Routes>

          {/* Renderiza el componente HomePage solo si el usuario no está autenticado */}
          {!isAuthenticated && <Route path="/" element={<HomePage />} />}

          {/* Ruta para el formulario de inicio de sesión solo si el usuario no está autenticado */}
          {!isAuthenticated && <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />}
          
          {/* Ruta para el formulario de registro solo si el usuario no está autenticado */}
          {!isAuthenticated && <Route path="/register" element={<RegistrationForm />} />}

          {/* Ruta protegida para el Dashboard */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
