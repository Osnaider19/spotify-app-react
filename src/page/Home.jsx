import { Card } from "../components/card/Card";
import { SpotfifyAuth } from "../helpers/auth";
import { useEffect, useCallback } from "react";
import {
  setRefreshToken,
  setIsAuthenticated,
  setResponseToken,
} from "../redux/facture/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Layout } from "../components/layout/Layout";
import { useLocation } from "react-router-dom";
export function Home() {
  const {refresh_token} = useSelector((state) => state.authUser);
  const state = useSelector((state) => state.authUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const authenticateUser = useCallback(
    async (code) => {
      try {
        let res;
        if (refresh_token) {
          const params = {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
          }
          console.log(...params)
          res = await SpotfifyAuth({...params});
          console.log(refresh_token)
        } else {
          res = await SpotfifyAuth({code});
        }
        dispatch(setIsAuthenticated(true));
        dispatch(setRefreshToken(res?.refresh_token));
        dispatch(setResponseToken(res));
        //console.log(res);
         console.log(state);
      } catch (error) {
        console.log(error);
      }
    },
    [setIsAuthenticated, setRefreshToken , setResponseToken , refresh_token]
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) authenticateUser(spotifyCode);
  }, [location.search]);
  return (
    <Layout>
      <section>
        <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Layout>
  );
}
