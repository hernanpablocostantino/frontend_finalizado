import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


function AgregarUsuario() {
    const navegar = useNavigate()

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')


    onsubmit = (e) => {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniquid()
        }
        e.preventDefault();


        axios.post('/api/usuario/agregarusuario', usuario)
            .then(res => {
                console.log(res.data)
                Swal.fire('Felicidades', 'El usuario se creó con éxito')
                navegar('/')
            })
            .then(err => { console.log(err) })
    }

    return (
        <section className="container">
            <div className="row">
                <h2 className="text-center mt-4 mb-4">Crear un nuevo usuario</h2>
                <form className="col-8 col-sm-8 mx-auto offset-3 needs-validation">
                    <div className="form-group was-validated mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" id="nombre" name="nombre" className="form-control" required autoComplete='off' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                        <div className='invalid-feedback'>Es necesario ingresar el nombre.</div>
                    </div>

                    <div className="form-group was-validated mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" className="form-control" required autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <div className='invalid-feedback'>Es necesario ingresar el email.</div>
                    </div>

                    <div className="form-group was-validated mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" id="telefono" name="telefono" className="form-control" required autoComplete='off' value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                        <div className='invalid-feedback'>Es necesario ingresar el teléfono.</div>
                    </div>

                    <div className="form-group was-validated mb-3 text-center">
                    <button type='submit' className="btn btn-success ">Guardar usuario</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default AgregarUsuario