import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { Layout } from "./components/layout/Layout";
import { Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { LoginPage } from "./page/LoginPage";
import { AlbumPage } from "./page/AlbumPage";
import { ArtistsPage } from "./page/ArtistsPage";
import { PlayListsPage } from "./page/PlayListsPage";
import { TrackPage } from "./page/TrackPage";
import { NotFound } from "./page/NotFound";
import { useEffect } from "react";
import { setInfoUser, setResponseToken } from "./redux/facture/auth/authSlice";
import { SpotfifyAuth } from "./helpers/auth";

function App() {
  const { isAuthenticated, refresh_token, responseToken } = useSelector(
    (state) => state.authUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const useRefreshToken = async () => {
      let res;
      try {
        if (refresh_token) {
          res = await SpotfifyAuth({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
          });
        }
        if (!res?.access_token) {
          throw new Error("error access token es null");
        }
        dispatch(setResponseToken(res));
      } catch (error) {
        console.log(error);
      }
    };
    const getInfoUser = async () => {
      const url = "https://api.spotify.com/v1/me";
      const token = responseToken?.access_token;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const infUser = await res.json();
      dispatch(
        setInfoUser({
          image: infUser?.images[0] ? infUser?.images[0] : null,
          name: infUser?.display_name,
          id: infUser?.id,
        })
      );
    };
    getInfoUser();
    useRefreshToken();
  }, []);
  return (
    <>
      <Toaster closeButton visibleToasts={4} duration={4000} />
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? <HomePage /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/playlist/:id"
            element={
              isAuthenticated ? <PlayListsPage /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/album/:id"
            element={
              isAuthenticated ? <AlbumPage /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/artist/:id"
            element={
              isAuthenticated ? <ArtistsPage /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/track/:id"
            element={
              isAuthenticated ? <TrackPage /> : <Navigate to={"/login"} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
