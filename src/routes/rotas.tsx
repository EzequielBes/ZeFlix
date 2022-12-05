import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Filme from "../pages/Filme";
import Login from "../pages/Login";

export function Rotas() {
  return (
    <Routes>
      <Route path="/ZeFlix" element={<Login/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/filmes/:id" element={<Filme/>}/>
    </Routes>
  );
}
