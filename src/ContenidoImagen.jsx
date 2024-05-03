import { animate, motion } from "framer-motion";
import "./index.css";

const ContenidoImagen = ({ gifs }) => {
  const varians = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 , delay: 1} },
  };
  return (
    <>
      {gifs.map((gif, ) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <div className="imagen">
          <motion.img
        
            initial="initial"
            animate="animate"
            width={"250"}
            height={"250"}
            variants={varians}
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
        </div>
      ))}
    </>
  );
};

export default ContenidoImagen;
