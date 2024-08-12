import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AcercaDe } from "./pages/acercade/components/AcercaDe";
import { Contacto } from "./pages/contacto/components/Contacto";
import { Faq } from "./pages/faq/components/Faq";
import { PrincipalNav } from "../general/components/PrincipalNav";
import { Mapa } from "../principal-pages/mapa/components/Mapa";
import { FilterProvider } from "../principal-pages/mapa/context/FilterContext";
import { GeolocationProvider } from "../principal-pages/mapa/context/GeolocationsContext";
import { InfoProvider } from "../principal-pages/mapa/context/InfoContext";
import { Respuesta } from "./pages/faq/components/Respuesta";
import { Registrar } from "../principal-pages/registrar/components/Registrar";
import { UserRegister } from "../principal-pages/registrar/components/UserRegister";
import { CompRegister } from "../principal-pages/registrar/components/CompRegister";

export function RouterInfoPages() {
    return(
        <Router>
            <PrincipalNav/>
            <Routes>
                <Route path="/acercade" element={<AcercaDe/>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/registrar" element={<UserRegister/>}></Route>
                <Route path="/registrar/empresa" element={<CompRegister/>}></Route>
                <Route path="/faq/:category/:question" element={<Respuesta/>}></Route>
                <Route path="/mapa" element={<FilterProvider><GeolocationProvider><InfoProvider><Mapa/></InfoProvider></GeolocationProvider></FilterProvider>}></Route>
            </Routes>
        </Router>
    )
}