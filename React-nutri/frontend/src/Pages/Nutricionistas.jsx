import axios from "axios";
import { useState,useEffect } from "react";


function NutricionistasCadastrados(){

    const [nutris, setNutri] = useState([]);

    function getNutri() {
        axios.get("http://localhost:5248/Nutricionistas")
            .then((resposta) => {
                setNutri(resposta.data);
            });
    }

    useEffect(getNutri, []);

    function getLinha(id, nome, email, especialidade, crm) {
        return (
            <tr>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{especialidade}</td>
                <td>{crm}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < nutris.length; i++) {
            const nutri = nutris[i];
            linhasDaTabela[i] = getLinha(nutri.id, nutri.nome, nutri.email, nutri.especialidade, nutri.crm);
        }
        return linhasDaTabela;
    }

    function getTabela() {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Especialidades</th>
                    <th>Crm</th>
                    <th>Ações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }



    return (
        <div>
            <h1>Formulário Nutricionistas</h1>
            {getTabela()}
        </div>

    );
    
}

export default NutricionistasCadastrados;