import { useDispatch, useSelector } from "react-redux";
import { SpotfifyAuth } from "../helpers/auth";
import { setResponseToken } from "../redux/facture/auth/authSlice";
import { useEffect } from "react";

export const useRefreshToken = async () => {
  const { refresh_token } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  useEffect(() => {
    async function refreshToken() {
      let res;
      try {
        if (refresh_token) {
          res = await SpotfifyAuth({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
          });
        }
        if (!res.access_token) {
          throw new Error("error access token es null");
        }
        dispatch(setResponseToken(res));
      } catch (error) {
        console.log(error);
      }
    }
    refreshToken();
  }, []);
};
