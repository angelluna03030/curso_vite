import React, { useState } from "react";
import ContenidoImagen from "./ContenidoImagen";

const App = () => {
  const [query, setQuery] = useState(""); // Estado para almacenar el término de búsqueda
  const [gifs, setGifs] = useState([]); // Estado para almacenar los GIFs
  const apiKey = "CvFChQwhxqO86996HEv1p66cTle7CYUv";
  const baseUrl = "https://api.giphy.com/v1/gifs/search";

  // Función para realizar la solicitud de búsqueda de GIFs
  const getGifs = async () => {
    try {
      const url = `${baseUrl}?api_key=${apiKey}&q=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setGifs(data.data); // Actualizar el estado de los GIFs con los resultados de la búsqueda
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs(); // Llamar a la función para buscar GIFs
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Actualizar el estado del término de búsqueda
          placeholder="Buscar GIFs..."
        />
        <button type="submit">Buscar</button>
      </form>
      {/* Mostrar los GIFs */}
      <ContenidoImagen gifs={gifs} />
    </>
  );
};

export default App;
