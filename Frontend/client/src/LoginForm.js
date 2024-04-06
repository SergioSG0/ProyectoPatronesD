// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://34.193.251.187:8000/api/login/', {
                username: username,
                password: password
            });
            console.log(response.data);
            // Actualizar el estado de autenticación en la aplicación
            onLogin();
            // Redirigir al usuario al dashboard después de iniciar sesión correctamente
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            {/* Encabezado con enlace para ir al inicio */}
            <div className="bg-blue-500 p-4 w-full mb-8">
                <nav className="container mx-auto flex justify-center items-center">
                    <Link to="/" className="text-white">Ir al Inicio</Link>
                </nav>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
