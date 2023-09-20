import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Layout } from "./components/layout/Layout";
import { Navigate } from "react-router-dom";
import { PlayLists } from "./page/PlayLists";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpotfifyAuth } from "./helpers/auth";
import { setResponseToken } from "./redux/facture/auth/authSlice";
import { Album } from "./page/Album";
import { Artists } from "./page/Artists";
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
      <Toaster closeButton visibleToasts={3} duration={4000} />
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/playlist/:id"
            element={isAuthenticated ? <PlayLists /> : <Navigate to="/login" />}
          />
          <Route
            path="/album/:id"
            element={isAuthenticated ? <Album /> : <Navigate to="/login" />}
          />
          <Route
            path="/artist/:id"
            element={isAuthenticated ? <Artists /> : <Navigate to="/login" />}
          />
        </Routes>
        
      </Layout>
    </>
  );
}

export default App;
