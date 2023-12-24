import "./vol.css";
import { useState, useEffect } from "react";
import * as Slider from "@radix-ui/react-slider";

export const Vol = ({ audioRef }) => {
  // Obtener el valor almacenado en localStorage o usar 1 como valor predeterminado
  const storedVolume = parseFloat(localStorage.getItem("volume")) || 1;

  const [volume, setVolume] = useState(storedVolume);

  const handleVolumeChange = (event) => {
    const newVolume = event[0];
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Almacena el volumen en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  return (
    <div className="flex  justify-end px-3 items-center max-w-[360px] w-full">
      <div className="flex justify-center items-center">
        <div className="w-[100px]">
          <Slider.Root
            className="SliderRoot"
            defaultValue={[volume]}
            value={[volume]}
            step={"0.1"}
            min="0"
            max="1"
            onValueChange={handleVolumeChange}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};
