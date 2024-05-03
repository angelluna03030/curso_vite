
import ContenidoImagen from "./ContenidoImagen";
import {useSearchGifs } from "./useSearchGifs"
import "./app.css"
const App = () => {
 const {handleSubmit ,query, gifs, setQuery } = useSearchGifs()
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
         value={query}
          onChange={(e) => setQuery(e.target.value)} 
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
