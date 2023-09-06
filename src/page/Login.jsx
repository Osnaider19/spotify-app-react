import { useSelector } from "react-redux";
import { CLIENT_ID, REDIRECT_URI } from "../config/config";
export function Login() {
  const handleLogin = () => {
    const scope = "user-read-private user-read-email";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const spotifyUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scope}`;
    location.replace(spotifyUrl);
  };
  const state = useSelector((state) => state.authUser);
  console.log(state);
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <button
        className="py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600"
        onClick={handleLogin}
      >
        Connect Spotify
      </button>
    </div>
  );
}
