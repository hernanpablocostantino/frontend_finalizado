import ListaUsuarios from '../ListaUsuarios';
import AgregarUsuario from '../AgregarUsuario';
import EditarUsuario from '../EditarUsuario';
import Navegacion from '../Navegacion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function Rutas() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<ListaUsuarios />} exact></Route>
        <Route path='/agregarusuario' element={<AgregarUsuario />} exact></Route>
        <Route path='/editarusuario/:idusuario' element={<EditarUsuario />} exact></Route>
      </Routes>
    </BrowserRouter>
  )
}