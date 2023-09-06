import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
