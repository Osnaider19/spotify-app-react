import { useQuery } from "@tanstack/react-query";
import { getDetailsTrack } from "../services/getDetailsTrack";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useGetDetailsTrack = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const token = responseToken?.access_token;
  const url = `https://api.spotify.com/v1/tracks/${id}`;
  const { data, isLoading, isError } = useQuery(
    ["TrackDetails"],
    () => getDetailsTrack(url, token),
    {
      refetchOnWindowFocus: false,
    }
  );
  return {
    data,
    isLoading,
    isError,
  };
};
