import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/getHome";
import { useSelector } from "react-redux";

export const useGetHome = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const token = responseToken?.access_token;
  const { data, isLoading , error , isError , } = useQuery(["Home"], () => getHome(token), {
    refetchOnWindowFocus: false,
    refetchInterval : false,
  });
  return {
    data,
    isLoading,
    error , 
    isError
  };
};
