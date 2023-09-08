import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Layout } from "./components/layout/Layout";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlayLists } from "./page/PlayLists";

function App() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <Login />}/>
          <Route path="/" element={isAuthenticated ? <Home/> : <Navigate to="/login"/>} />
          <Route path="/playlist/:id" element={isAuthenticated ? <PlayLists/> : <Navigate to="/login"/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
