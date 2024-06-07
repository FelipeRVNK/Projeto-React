import axios from "axios";
import { useState,useEffect } from "react";


function UsuariosCadastrados(){

    const [usuarios, setUsuario] = useState([]);

    function getUsuario() {
        axios.get("http://localhost:****/Usuarios")
            .then((resposta) => {
                setUsuario(resposta.data);
            });
    }

    useEffect(getUsuario, []);

    function getLinha(id, nome, email, idade, peso) {
        return (
            <tr>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{idade}</td>
                <td>{peso}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            linhasDaTabela[i] = getLinha(usuario.id, usuario.nome, usuario.email, usuario.idade, usuario.peso);
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
                    <th>Idade</th>
                    <th>Peso</th>
                    <th>Ações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }



    return (
        <div>
            <h1>Formulário Usuarios</h1>
            {getTabela()}
        </div>

    );
    
}

export default UsuariosCadastrados;