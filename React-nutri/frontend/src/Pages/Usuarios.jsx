import axios from "axios";
import { useState, useEffect } from "react";


function UsuariosCadastrados(){

    const [usuario, setUsuario] = useState(null);
    const [usuarios, setUsuarios] = useState([]);


    function getUsuarios() {
        axios.get("http://localhost:5248/Usuarios")
            .then((resposta) => {
                setUsuarios(resposta.data);
            });
    }

    useEffect(getUsuarios, []);

    function novoUsuario () {
        setUsuario(
            {
            nome: "",
            email: "",
            idade: "",
            peso: ""
            }
        );
    }

    function cancelar() {
        setUsuario(null);
    }

    function refresh() {
        cancelar();
        getUsuarios();
    }

    function getConteudo() {
        if (usuario == null) {
            return (<>
                <button type="button"
                    onClick={() => { novoUsuario(); }} >
                    Novo
                </button>
                {getTabela()}
            </>
            );
        } else {
            return getFormulario();
        }
    }    

    function excluirUsuario(id){
        axios.delete("http://localhost:5248/Usuarios/" + id).then(
            ()=>{
                getUsuarios();
            }
        );
    }

    function salvarUsuario() {
        if (usuario.id) {
            axios.put("http://localhost:5248/Usuarios/" + usuario.id, usuario)
                .then(() => {
                refresh();
            });
        } else {
            axios.post("http://localhost:5248/Usuarios", usuario)
                .then(() => {
                refresh();
            }); 
        }
    }

    function editarUsuario(usuario) {
        setUsuario(usuario);
    }

    function getLinha(usuario) {
        return (
            <tr>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.peso}</td>
                <td>
                    <button onClick={
                        ()=>{ excluirUsuario(usuario.id); }}>Excluir</button>
                    <button onClick={
                        () => { editarUsuario(usuario); }}>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            linhasDaTabela[i] = getLinha(usuario);
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

    function onChangeUsuario(campo, valor, id){
        usuario[campo] = valor;
        setUsuario(
            {
                ...usuario,
            }
        );
    }

    function getFormulario(){
        return(
            <form>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" 
                    value={usuario.nome}
                    onChange={(e)=>{
                        onChangeUsuario(e.target.name, e.target.value, usuario.id);
                    }}
                />

                <label for="email">Email</label>
                <input type="text" id="email" name="email"
                    value={usuario.email}
                    onChange={(e)=>{
                        onChangeUsuario(e.target.name, e.target.value, usuario.id);
                    }}                
                />

                <label for="idade">Idade</label>
                <input type="text" id="idade" name="idade"
                    value={usuario.idade}
                    onChange={(e)=>{
                        onChangeUsuario(e.target.name, e.target.value, usuario.id);
                    }}                
                />

                <label for="peso">Peso</label>
                <input type="text" id="peso" name="peso"
                    value={usuario.peso}
                    onChange={(e)=>{
                        onChangeUsuario(e.target.name, e.target.value, usuario.id);
                    }}
                />

                <button onClick={() => { salvarUsuario(); }}>Salvar</button>
                <button onClick={() => { cancelar(); }}>Cancelar</button> 
            </form>
        );
    }

    return (
        <div>
            <h1>Cadastro Usuarios</h1>
            {getConteudo()}
        </div>

    );
    
}

export default UsuariosCadastrados;