import { SpotfifyAuth } from "../helpers/auth";
import { useEffect, useCallback } from "react";
import { CLIENT_ID, REDIRECT_URI } from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , useLocation } from "react-router-dom";
import { setIsAuthenticated , setRefreshToken , setResponseToken } from "../redux/facture/auth/authSlice";

export function LoginPage() {
  const { refresh_token } = useSelector((state) => state.authUser);
  const state = useSelector((state) => state.authUser);
  const Location = useLocation();
  const navigate = useNavigate();
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
        navigate("/");
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
    const urlParams = new URLSearchParams(Location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) authenticateUser(spotifyCode);
  }, [Location.search]);

  const handleLogin = () => {
    const scope = "user-read-private user-read-email";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const spotifyUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scope}`;
    location.replace(spotifyUrl);
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#121212]">
      <button
        className="py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600"
        onClick={handleLogin}
      >
        Connect Spotify
      </button>
    </div>
  );
}
