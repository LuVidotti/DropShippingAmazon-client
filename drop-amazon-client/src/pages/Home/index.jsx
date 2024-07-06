import Header from "../../components/Header";
import Titulo from "../../components/Titulo";
import Instrutor from "../../img/fotoMurilo.jpeg";
import fotoLuis from "../../img/fotoLuis.jpg";
import fotoRyan from "../../img/fotoRyan.jpeg";
import fotoRafa from "../../img/fotoRafa.png";
import "./Home.css";
import Depoimento from "../../components/Depoimento";
import BotaoComprar from "../../components/BotaoComprar";
import Footer from "../../components/Footer";
import VideoBoasVindas from "../../videos/PAGINA DE VENDAS.mp4";

function Home() {
    return (
        <div className="home">
            <Header />
            <section className="sobre" id="sobre">
                <Titulo>Sobre o curso</Titulo>
                <div className="container">
                    <video
                        src={VideoBoasVindas}
                        width={900}
                        height={700}
                        className="sobre-video"
                        controls
                    >

                    </video>
                    <a href="https://pay.kiwify.com.br/SAANrg6" className="sobre__btn-comprar">Compre agora</a>
                </div>
            </section>
            <section className="instrutor" id="instrutor">
                <Titulo>Quem irá te ensinar</Titulo>
                <div className="instrutor__container">
                    <img src={Instrutor} alt="foto do instrutor Murilo Souza" />
                    <p>Murilo de Souza, um jovem adolescente de apenas 16 anos, já possui diversos pequenos empreendimentos, incluindo um serviço de assistência técnica para eletrônicos e uma loja virtual de camisetas. No entanto, seu principal empreendimento é a venda de produtos na Amazon, utilizando um método que ele mesmo desenvolveu. Atualmente, Murilo fatura mais de 400 reais por dia com essa atividade.</p>
                </div>
            </section>
            <section className="depoimentos" id="depoimentos">
                <Titulo>Depoimentos</Titulo>
                <div className="depoimentos__container">
                    <Depoimento
                        foto={fotoLuis}
                        nome="Luís Felipe"
                        texto="Graças às dicas que aprendi nesse curso, hoje consigo faturar mais de 300 reais por dia"
                    />
                    <Depoimento 
                        foto={fotoRyan}
                        nome="Ryan Luccas"
                        texto="Já cheguei a faturar mais de 2000 reais por mês com a mentoria que fiz com o Murilo"
                    />
                    <Depoimento 
                        foto={fotoRafa}
                        nome="Rafael Yuiti"
                        texto="Hoje eu tenho uma ótima renda extra por causa das aulas que fiz com o Murilo"
                    />
                </div>
            </section>

            <BotaoComprar />
            <Footer />
        </div>
    )
}

export default Home;