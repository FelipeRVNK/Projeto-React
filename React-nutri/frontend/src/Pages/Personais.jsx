import axios from "axios";
import { useState,useEffect } from "react";


function PersonaisCadastrados(){

    const [personais, setPersonal] = useState([]);

    function getPersonal() {
        axios.get("http://localhost:5248/Personais")
            .then((resposta) => {
                setPersonal(resposta.data);
            });
    }

    useEffect(getPersonal, []);

    function getLinha(id, nome, email, especialidade, cref) {
        return (
            <tr>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{especialidade}</td>
                <td>{cref}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < personais.length; i++) {
            const personal = personais[i];
            linhasDaTabela[i] = getLinha(personal.id, personal.nome, personal.email, personal.especialidade, personal.cref);
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
                    <th>Cref</th>
                    <th>Ações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }



    return (
        <div>
            <h1>Formulário Personais</h1>
            {getTabela()}
        </div>

    );
    
}

export default PersonaisCadastrados;