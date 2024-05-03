import "./index.css"
const ContenidoImagen = ({gifs }) =>{

return <>
      {gifs.map((gif) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <div className="imagen">
            <img
              width={"250"}
              height={"250"}
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
            />
          </div>
        ))}
     </>
}


export default ContenidoImagen;