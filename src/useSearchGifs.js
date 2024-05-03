import { useState } from "react";

export const useSearchGifs = () => {
  const [query, setQuery] = useState(""); // Estado para almacenar el término de búsqueda
  const [gifs, setGifs] = useState([]); // Estado para almacenar los GIFs
  const apiKey = "CvFChQwhxqO86996HEv1p66cTle7CYUv";
  const baseUrl = "https://api.giphy.com/v1/gifs/search";
  const [cargando, setcargando] = useState(false);
  // Función para realizar la solicitud de búsqueda de GIFs
  const getGifs = async () => {
    try {
      const url = `${baseUrl}?api_key=${apiKey}&q=${query}`;
      setcargando(true);
      const response = await fetch(url);
      const data = await response.json();
      setcargando(false);

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

  return {
    handleSubmit,
    setQuery, // Devolver la función para actualizar el estado del término de búsqueda
    query,
    gifs,
    cargando,
    
  };
};
