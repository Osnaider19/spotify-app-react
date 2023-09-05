import { useSelector } from "react-redux";

export  function Login() {
  const handleLogin = () => {
    const url_redirect = "http://localhost:5173/";
    const scope = "user-read-private user-read-email";
    const CLIENTID = "db421431148949248690db175ed97034";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const spotifyUrl = `${AUTH_ENDPOINT}?client_id=${CLIENTID}&response_type=code&redirect_uri=${url_redirect}&scope=${scope}`;
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
