import { Tracks } from "../components/tracks/Tracks";
import { Players } from "../components/players/Players";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpotfifyAuth } from "../helpers/auth";
import { setResponseToken } from "../redux/facture/auth/authSlice";
export function Home() {
  const { refresh_token } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const refreshToken = async () => {
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
  };
  useEffect(() => {
    refreshToken();
  }, []);
  return (
    <section>
      <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        <Tracks />
        <Players />
      </div>
    </section>
  );
}
