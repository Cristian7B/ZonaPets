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
import { UserRegister } from "../principal-pages/registrar/components/UserRegister";
import { CompRegister } from "../principal-pages/registrar/components/CompRegister";
import { InicialLandingLogin } from "../principal-pages/loginUser/components/InicialLanding";
import { AccountLogin } from "../principal-pages/loginUser/components/AccountLogin";
import { AccountRegister } from "../principal-pages/loginUser/components/AccountRegister";
import { DataUserProvider } from "../principal-pages/loginUser/context/DataUserContext";
import { Tyc } from "./pages/terminosycondiciones/Tyc";
import { Afiliate } from "./pages/afiliate/components/Afiliate";
import { PremiumLanding } from "./pages/premium/PremiumLanding";

export function RouterInfoPages() {
    const isLoginRoute = window.location.pathname.startsWith('/iniciarsesion/login') || window.location.pathname.startsWith('/iniciarsesion/registrar') ? true: false;

    return(
        <>
        <DataUserProvider>
            <Router>
                {isLoginRoute ? <></> : <PrincipalNav />}
                <Routes>
                    <Route path="/acercade" element={<AcercaDe/>}></Route>
                    <Route path="/terminosycondiciones" element={<Tyc/>}></Route>
                    <Route path="/afiliate" element={<Afiliate/>}></Route>
                    <Route path="/premium" element={<PremiumLanding/>}/>
                    <Route path="/contacto" element={<Contacto/>}></Route>
                    <Route path="/faq" element={<Faq/>}></Route>
                        <Route path="/iniciarsesion" element={<InicialLandingLogin/>}></Route>
                        <Route path="/iniciarsesion/login" element={<AccountLogin/>}></Route>
                        <Route path="/iniciarsesion/registrar" element={<AccountRegister/>}></Route>
                    <Route path="/registrar" element={<UserRegister/>}></Route>
                    <Route path="/registrar/empresa" element={<CompRegister/>}></Route>
                    <Route path="/faq/:category/:question" element={<Respuesta/>}></Route>
                    <Route path="/mapa" element={
                        <FilterProvider>
                            <GeolocationProvider>
                                <InfoProvider>
                                    <Mapa/>
                                </InfoProvider>
                            </GeolocationProvider>
                        </FilterProvider>
                    }></Route>
                </Routes>

            </Router>
        </DataUserProvider>
        </>
    )
}
