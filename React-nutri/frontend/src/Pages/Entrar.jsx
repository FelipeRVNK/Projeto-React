import "./Entrar.css";


function Entrar(){
    

    return(

            <div class="container">
                <div class="botao-form">
                <a href="signin.html"><button class="botao-entrar">Entrar</button></a>
                <a href="signup.html"><button class="botao-cadastrar">Cadastrar</button></a>
                </div>

                <form id="signin">
                    <h2 class="titulo">Entrar</h2>
                    <p class="escrita">Digite os seus dados nos campos abaixo.</p>
                    <p class="email">Email</p>
                    <input type="text" placeholder="Email" required />
                    <i class="fas fa-envelope iEmail"></i>
                    <p>Senha</p>
                    <input type="senha" placeholder="Senha" required />
                    <i class="fas fa-lock iSenha"></i>
                    <div class="divCheck">
                        <input type="checkbox" />
                        <span>Lembrar Senha</span>
                    </div>
                    <button type="acessar">Acessar</button>
                </form>
            </div>
    )
}

export default Entrar;