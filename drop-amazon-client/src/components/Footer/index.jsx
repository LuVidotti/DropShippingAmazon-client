import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <footer className="footer">
            <div className="redes-sociais">
                <div className="redes-icons">
                    <a href="mailto:Murilanda9@gmail.com" target="_blank"><IoMdMail className="redes-icons__icon mail" /></a>
                    <a href="https://www.instagram.com/murilo.souzaaaa/" target="_blank"><FaInstagram className="redes-icons__icon insta" /></a>
                    <a href=""><FaDiscord className="redes-icons__icon disc" /></a>
                    <a href="https://wa.me/43996465056" target="_blank"><FaWhatsapp className="redes-icons__icon whats" /></a>
                </div>
                <div className="acesso-rapido">
                    <a href="#sobre">Sobre</a>
                    <a href="#instrutor">Instrutor</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <a href="https://pay.kiwify.com.br/SAANrg6" target="_blank">Comprar</a>
                </div>
            </div>
            <div className="copyright">
                <p>
                    Copyright ©2024; Desenvolvido por 
                </p>
                <a href="https://vidotti-dev-portfolio.vercel.app/" target="_blank">Vidotti Dev</a>
            </div>
        </footer>
    )
}

export default Footer;