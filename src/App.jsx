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
import { setResponseToken } from "./redux/facture/auth/authSlice";
import { SpotfifyAuth } from "./helpers/auth";

function App() {
  const { isAuthenticated, refresh_token } = useSelector(
    (state) => state.authUser
  );

  const dispatch = useDispatch();
  const useRefreshToken = async () => {
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
    useRefreshToken();
  }, []);

  return (
    <>
      <Toaster closeButton visibleToasts={4} duration={4000} />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        {isAuthenticated && (
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/playlist/:id" element={<PlayListsPage />} />
                  <Route path="/album/:id" element={<AlbumPage />} />
                  <Route path="/artist/:id" element={<ArtistsPage />} />
                  <Route path="/track/:id" element={<TrackPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
