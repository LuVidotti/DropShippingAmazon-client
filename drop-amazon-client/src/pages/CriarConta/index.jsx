import "./CriarConta.css";
import Logo from "../../img/fundoAzulado.png";

function CriarConta() {
    return (
        <div className="login criar-conta">
            <div className="login__container">
                <img src={Logo} alt="logotipo" />
                <h2>Criar conta</h2>
                <p>
                    Preencha com os dados de acesso dos clientes
                </p>
                <form className="login__container--form">
                    <input type="email" placeholder="Digite o e-mail..."/>
                    <input type="text" placeholder="Digite o nome de usuario"/>
                    <input type="password" placeholder="Digite a senha..."/>
                    <input type="password" placeholder="Confirme a senha..."/>
                    <button type="submit">
                        Criar conta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CriarConta;