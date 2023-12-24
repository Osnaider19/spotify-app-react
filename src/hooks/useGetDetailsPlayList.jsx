import { useQuery } from "@tanstack/react-query";
import { getDetailsPlayList } from "../services/getDetailsPlayList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGetDetailsPlayList = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const token = responseToken?.access_token;
  const url = `https://api.spotify.com/v1/playlists/${id}`;
  const { data, isLoading, isError , refetch } = useQuery(
    ["detailsPlayList" , `${id}`],
    () => getDetailsPlayList(url, token),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  return {
    data,
    isError,
    isLoading,
    refetch
  };
};
