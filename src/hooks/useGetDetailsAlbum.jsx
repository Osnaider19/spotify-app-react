import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsAlbum } from "../services/getDetailsAlbum";

export const useGetDetailsAlbum = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const token = responseToken?.access_token;
  const url = `https://api.spotify.com/v1/albums/${id}`;
  const { data, isLoading, isError, refetch } = useQuery(
    ["detailsAlbum", `${id}`],
    () => getDetailsAlbum(url, token),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: 6,
    }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};
