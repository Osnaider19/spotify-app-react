import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";
import { LoginPage } from "./page/LoginPage";
import { HomePage } from "./page/HomePage";
import { AlbumPage } from "./page/AlbumPage";
import { ArtistsPage } from "./page/ArtistsPage";
import { PlayListsPage } from "./page/PlayListsPage";
import { TrackPage } from "./page/TrackPage";
import { NotFound } from "./page/NotFound";
import { useRefreshToken } from "./hooks/useRefreshToken";

function App() {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  useRefreshToken(); // refrescar el token si  existe un user autenticado

  return (
    <>
      <Toaster closeButton visibleToasts={4} duration={4000} />

      {/* Rutas sin Layout */}
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
      </Routes>

      {/* Rutas con Layout */}
      {isAuthenticated && (
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
      )}
    </>
  );
}

export default App;
