import { useEffect, useState } from "react";
import { Registrar } from "./Registrar";

import "../RegistrarComp.css"
import { useGeolocation } from "../hooks/useGeolocation";
import axios from "axios";
import { toast, Toaster } from "sonner";
export function CompRegister() {
    const {objectLocation} = useGeolocation()
    const [formData, setFormData] = useState({
        nombre_de_quien_registra: '',
        telefono_usuario: '',
        correo_electronico: '',
        tipo_de_negocio: '',
        nombre_compañia: '',
        latitud: objectLocation.lat,
        longitud: objectLocation.lng,
    });

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            latitud: objectLocation.lat,
            longitud: objectLocation.lng
        }))
    },[objectLocation])
    
    const handleLocationChange = (newLocation) => {
        setFormData(prevState => ({
            ...prevState,
            latitud: newLocation.lat,
            longitud: newLocation.lng
        }));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
            e.preventDefault();
    
            // const csrftoken = getCookie('csrftoken'); 
            axios.post('http://127.0.0.1:8000/back/procesar/empresa', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': csrftoken,  
                },
            })
            .then(response => {
                if (response.data.mensaje) {
                    toast.success(`Haz registrado "${formData.nombre_compañia}"`, {
                        className: "toastSuccesRender"
                    })
                    setFormData({
                        nombre_compañia: '',
                        latitud: objectLocation.lat,
                        longitud: objectLocation.lng,
                        tipo_de_negocio: '',
                        correo_electronico: null,
                        telefono_usuario: '',
                    })
                } else if (response.data.errors) {
                    alert("Errores: " + JSON.stringify(response.data.errors));
                }
            })
            .catch(error => {
                toast.error(`No se ha podido registrar el lugar.`, {
                    className: "toastErrorRender"
                })
            });
        
    }

    return (
        <Registrar onLocationChange={handleLocationChange}>
            <Toaster richColors expand={true}/>
            <section className="contentForm">
                <h1>¡Registra un lugar!</h1>
                <form className="formForRegister" onSubmit={handleSubmit}>
                    <article>
                        <label htmlFor="inputForUser">Nombre De Quien Registra</label>
                        <input
                            type="text"
                            id="inputForUser"
                            name="nombre_de_quien_registra"
                            placeholder="Pablo"
                            value={formData.nombre_de_quien_registra}
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForEmail">Correo Electrónico</label>
                        <input
                            type="email"
                            id="inputForEmail"
                            name="correo_electronico"
                            placeholder="zonapets@zonapets.com"
                            value={formData.correo_electronico}
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForComp">Nombre Compañia</label>
                        <input
                            type="text"
                            id="inputForComp"
                            name="nombre_compañia"
                            placeholder="Nombre de la compañía"
                            value={formData.nombre_compañia}
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForTel">Teléfono Usuario</label>
                        <input
                            type="number"
                            id="inputForTel"
                            name="telefono_usuario"
                            placeholder="Teléfono"
                            value={formData.telefono_usuario}
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForType">Tipo De Negocio</label>
                        <select className="selectForForm" onChange={handleChange} name="tipo_de_negocio" id="inputForType">
                            <option selected value="Hoteles">Hoteles</option>
                            <option value="Restaurante">Restaurante</option>
                            <option value="Parque Para Mascotas">Parque Para Mascotas</option>
                            <option value="Centro Comercial">Centro Comercial</option>
                            <option value="Tienda de mascotas">Tienda de Mascotas</option>
                            <option value="Sitios Turísticos">Sitios Turísticos</option>
                            <option value="Servicios de paseo de perros">Servicio De Paseo</option>
                            <option value="Otro">Otros</option>
                        </select>
                    </article>
                    <button type="submit">Registrar</button>
                </form>
            </section>
        </Registrar>
    )
}