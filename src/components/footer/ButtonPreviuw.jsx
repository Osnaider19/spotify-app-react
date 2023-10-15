import { useDispatch, useSelector } from "react-redux";
import { IconPreviuw } from "../../Icons/Icons";
import { setIsPlaying, setTrackPlayer } from "../../redux/facture/players/players";

export const ButtonPreviuw = () => {
  const { track, currentMusic } = useSelector((state) => state.players);

  const dispatch = useDispatch();

  const handelPreviuw = () => {
    //buscamos la id de la track que esta en el estado
    const searchTrack = track?.id;
    //traemos todas las tracks que esta en el estado
    const tracks = currentMusic?.tracks;
    //buscamos el indece de la track por el id de la track en toda la lista de tracks
    const index = tracks?.findIndex(({ track }) => track.id === searchTrack);
    //si el index en mayor a 0 significa que puede ir hacia atras
    if (index > 0) {
      //aqui actualizamos el estado de la track que se esta reproduciendo con el index - 1 porque el index es el indice de la track que se esta reproduciendo
      dispatch(setTrackPlayer(currentMusic.tracks[index - 1].track));
      //actualizamos el isplaying
      dispatch(setIsPlaying(true));
      //el elemento de el dom audio por su id
      const audio = document.querySelector("#audio");
      //y actualizamos el autoplay a true
      audio.autoplay = true;
      return;
    }
  };
  return (
    <button
      className="text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"
      onClick={handelPreviuw}
    >
      <IconPreviuw />
    </button>
  );
};
