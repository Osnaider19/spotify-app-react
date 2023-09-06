
import { SpotfifyAuth } from "../helpers/auth";
import { useEffect, useCallback } from "react";
import {
  setRefreshToken,
  setIsAuthenticated,
  setResponseToken,
} from "../redux/facture/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Tracks } from "../components/tracks/Tracks";
export function Home() {
  const { refresh_token } = useSelector((state) => state.authUser);
  const state = useSelector((state) => state.authUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const authenticateUser = useCallback(
    async (code) => {
      try {
        let res;
        if (refresh_token) {
          res = await SpotfifyAuth({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
          });
          console.log(res);
        } else {
          res = await SpotfifyAuth({ code, grant_type: "authorization_code" });
          dispatch(setRefreshToken(res?.refresh_token));
        }
        if (res?.access_token) {
          dispatch(setIsAuthenticated(true));
          dispatch(setResponseToken(res));
        } else {
          console.log("user no authenticated");
        }
        console.log(res);
      } catch (error) {
        console.log(error);
        dispatch(setIsAuthenticated(false));
        dispatch(setRefreshToken(null));
        dispatch(setResponseToken(null));
      }
    },
    [
      setIsAuthenticated,
      setRefreshToken,
      setResponseToken,
      refresh_token,
      state.IsAuthenticated,
    ]
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) authenticateUser(spotifyCode);
  }, [location.search]);
  console.log(state);
  return (
    <section>
      <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        <Tracks />
      </div>
    </section>
  );
}
