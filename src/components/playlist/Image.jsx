import React, { useRef, useState } from "react";
import ColorThief from "color-thief-browser";

function ColorDominante({ imagen }) {
  const imageRef = useRef(null);
  const [dominantColor, setDominantColor] = useState(null);

  const handleImageLoad = () => {
    const colorThief = new ColorThief();
    console.log(imageRef.current.currentSrc)
    const color = colorThief.getColor(imageRef.current);
    if (color) {
      setDominantColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    }
    console.log(dominantColor);
  };

  return (
    <div>
      <img
        ref={imageRef}
        src={imagen}
        alt="Imagen"
        crossOrigin="anonymous"
        className="w-[100px] h-[100px] object-cover"
        
      />
      <button onClick={handleImageLoad}> ver</button>
      {dominantColor && (
        <div>
          <p>Color dominante:</p>
          <div
            style={{
              backgroundColor: dominantColor,
              width: "50px",
              height: "50px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ColorDominante;
