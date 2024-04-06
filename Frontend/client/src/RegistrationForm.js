import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        photo: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Obtener el token CSRF de la cookie
        const csrfToken = getCookie('csrftoken');

        const formDataToSend = new FormData();
        formDataToSend.append('username', formData.username);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('photo', formData.photo);

        // Realizar la solicitud POST con Axios
        try {
            const response = await axios.post('http://34.193.251.187:8000/api/registration/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrfToken
                }
            });
            console.log('Registro exitoso:', response.data);
            // Redirigir al usuario al dashboard después de registrarse correctamente
            window.location.href = '/dashboard'; // Cambio la redirección a través de la URL
        } catch (error) {
            console.error('Error al registrar:', error);
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

            <div className="flex justify-center items-center h-screen">
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
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                            Photo
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

export default RegistrationForm;
