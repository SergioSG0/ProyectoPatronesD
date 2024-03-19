import React, { useState, useEffect } from 'react'; // Importación de React y los hooks useState, useEffect
import axios from 'axios'; // Importación de Axios para realizar solicitudes HTTP

function App() { // Definición del componente de React llamado App
  const [proyectos, setProyectos] = useState([]); // Declaración del estado proyectos utilizando el hook useState, inicializado como un arreglo vacío

  useEffect(() => { // Hook useEffect utilizado para realizar efectos secundarios en el componente
    async function fetchProyectos() { // Función asincrónica fetchProyectos para obtener proyectos del backend
      try {
        const response = await axios.get('http://localhost:8000/api/proyectos/'); // Realizar una solicitud GET al endpoint /api/proyectos/ del backend utilizando Axios
        setProyectos(response.data.proyectos); // Actualizar el estado proyectos con los datos obtenidos del backend
      } catch (error) {
        console.error('Error al obtener proyectos:', error); // Manejar errores en caso de que ocurran durante la solicitud HTTP
      }
    }

    fetchProyectos(); // Llamar a la función fetchProyectos cuando el componente se monta por primera vez
  }, []); // El segundo argumento del hook useEffect, un arreglo vacío, indica que este efecto se ejecuta solo una vez después de que el componente se monta

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <ul>
        {proyectos.map(proyecto => ( // Iterar sobre el arreglo de proyectos y renderizar cada proyecto como un elemento de la lista
          <li key={proyecto.id}>{proyecto.nombre}</li> // Utilizar el nombre del proyecto como contenido del elemento de la lista
        ))}
      </ul>
    </div>
  );
}

export default App; // Exportar el componente App para que pueda ser utilizado en otros archivos

