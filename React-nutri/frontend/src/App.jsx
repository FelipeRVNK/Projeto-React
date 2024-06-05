import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import Entrar from "./Pages/Entrar";
import Imc from "./Pages/Imc";
import Nutricionistas from "./Pages/Nutricionistas";

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/entrar" element={<Layout><Entrar/></Layout>} />
                <Route path="/imc" element={<Layout><Imc/></Layout>} />
                <Route path="/nutricionistas" element={<Layout><Nutricionistas/></Layout>} />
            </Routes>
        </>
    )
}
export default App;



