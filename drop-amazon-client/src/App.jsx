import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/criar-conta" Component={CriarConta}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
