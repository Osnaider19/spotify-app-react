import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { Layout } from "./components/layout/Layout";
import { Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpotfifyAuth } from "./helpers/auth";
import { setResponseToken } from "./redux/facture/auth/authSlice";
import { LoginPage } from "./page/LoginPage";
import { AlbumPage } from "./page/AlbumPage";
import { ArtistsPage } from "./page/ArtistsPage";
import { PlayListsPage } from "./page/PlayListsPage";
import { TrackPage } from "./page/TrackPage";
import { NotFound } from "./page/NotFound";
function App() {
  const { isAuthenticated, refresh_token } = useSelector(
    (state) => state.authUser
  );
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
    <>
      <Toaster closeButton visibleToasts={4} duration={4000} />

      <Layout>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/playlist/:id"
            element={
              isAuthenticated ? <PlayListsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/album/:id"
            element={isAuthenticated ? <AlbumPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/artist/:id"
            element={
              isAuthenticated ? <ArtistsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/track/:id"
            element={isAuthenticated ? <TrackPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
