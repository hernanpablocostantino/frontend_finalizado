import React, { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function UsuarioIndividual({ usuario }) {

    const navegar = useNavigate()

    useEffect(() => {
        AOS.init()
    }, [])


    function borrarusuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', { idusuario: idusuario }).then(res => {
            console.log(res.data)
            Swal.fire({
                title: 'Quieres eliminar?',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Sí, quiero eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navegar(0)
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-8 col-sm-8 offset-3 mx-auto" data-aos="flip-right">
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success mt-2">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger mt-2" onClick={() => { borrarusuario(usuario.idusuario) }}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual