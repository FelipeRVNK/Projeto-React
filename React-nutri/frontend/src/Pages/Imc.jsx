import "./Imc.css";

function Imc(){
    return(
        <div class="container_imc">
            <div id="calc-container">
                <h2>Calculadora de IMC</h2>
                <form id="imc-form">
                <div class="form-inputs">
                    <div class="form-control">
                    <label for="height">Altura:</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Exemplo 1,75"
                        required
                    />
                    </div>
                    <div class="form-control">
                    <label for="weight">Peso:</label>
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Exemplo 70,5"
                    />
                    </div>
                </div>
                <div class="action-control">
                    <button id="calc-btn">Calcular</button>
                    <button id="clear-btn">Limpar</button>
                </div>
                </form>
            </div>
            
        </div>
    )
}
export default Imc;