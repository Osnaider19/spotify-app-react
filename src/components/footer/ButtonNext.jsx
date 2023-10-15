import React from "react";
import { IconNext } from "../../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setTrackPlayer } from "../../redux/facture/players/players";

export const ButtonNext = () => {
  const { track, currentMusic } = useSelector((state) => state.players);
  
  const dispatch = useDispatch();

  const handelNext = () => {
     //buscamos la id de la track que esta en el estado
    const searchTrack = track?.id;
    //traemos todas las tracks que esta en el estado
    const tracks = currentMusic?.tracks;
     //buscamos el indece de la track por el id de la track en toda la lista de tracks
    const index = tracks?.findIndex(({ track }) => track.id === searchTrack);
    //validamos que el index + 1 sea mayor o = a la longuitud menos -1 de todo el arry de tracks para ver si puede ir a una siguiente track
    const hasNextSongs = index + 1 <= tracks?.length - 1
    if (hasNextSongs) {
        //aqui actualzamos el estado de la track que se esta reproduciendo con el index +1 , el punto track es porque asi es el campo de spotify 
        dispatch(setTrackPlayer(currentMusic.tracks[index + 1].track));
         //actualizamos el isplaying
         dispatch(setIsPlaying(true));
         //el elemento de el dom audio por su id 
         const audio = document.querySelector("#audio");
         //y actualizamos el autoplay a true
         audio.autoplay = true;
    }
  };
  return (
    <button
      className="text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"
      onClick={handelNext}>
      <IconNext />
    </button>
  );
};
