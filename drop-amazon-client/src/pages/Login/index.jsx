import "./Login.css";
import Logo from "../../img/fundoAzulado.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt="logotipo" />
                <h2>Acesse sua conta</h2>
                <p>
                    Preencha com seus dados de acesso à plataforma
                </p>
                <form className="login__container--form">
                    <input type="email" placeholder="Digite seu e-mail..."/>
                    <input type="password" placeholder="Digite sua senha..."/>
                    <button type="submit">
                        Efetuar login
                        <FaArrowRightLong />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;