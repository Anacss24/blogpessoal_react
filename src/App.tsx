import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import DeletarTema from "./components/temas/deletartema/DeletarTema"
import FormTemas from "./components/temas/formtema/FormTemas"
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens"
import FormPostagem from "./components/postagens/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem"
import Perfil from "./pages/perfil/Perfil"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
 
function App() {
  // Código TypeScript

  return (
    // Código TSX => HTML + CSS
    <>
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temas" element={<ListaTemas/>} />
            <Route path="/cadastroTema" element={< FormTemas />} />
            <Route path="/editarTema/:id" element={< FormTemas/>} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App