import "./Header.css";
import Logo from "../../img/fundoAzulado.png";

function Header() {
    return (
        <header className="cabecalho">
            <img onClick={() => window.location.reload()} src={Logo} alt="Logotipo do curso" />
            <div className="cabecalho__links">
                <a href="#sobre" className="cabecalho__links--link">Sobre</a>
                <a href="#instrutor" className="cabecalho__links--link">Instrutor</a>
                <a href="" className="cabecalho__links--link">Depoimentos</a>
                <a href="https://pay.kiwify.com.br/SAANrg6" className="cabecalho__links--comprar">Comprar</a>
            </div>
        </header>
    )
}

export default Header;